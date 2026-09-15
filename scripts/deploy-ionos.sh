#!/usr/bin/env bash
# Upload ./out to IONOS over SFTP (GitHub Actions → hosting).
# Default remote directory is collective (webspace /collective).
# Required: IONOS_SFTP_HOST IONOS_SFTP_USER IONOS_SFTP_PASSWORD
# Optional: IONOS_SFTP_REMOTE_DIR (default collective)  IONOS_SFTP_PORT (default 22)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

trim() {
  local s="$1"
  s="${s#"${s%%[![:space:]]*}"}"
  s="${s%"${s##*[![:space:]]}"}"
  printf '%s' "$s"
}

# FileZilla / IONOS values are often copied as sftp://host or host:22.
normalize_host() {
  local h
  h="$(trim "$1")"
  h="${h#sftp://}"
  h="${h#ftps://}"
  h="${h#ftp://}"
  h="${h#ssh://}"
  if [[ "$h" == *@* ]]; then
    h="${h##*@}"
  fi
  h="${h%%/*}"
  if [[ "$h" == *:* && "${h##*:}" =~ ^[0-9]+$ ]]; then
    PORT="${h##*:}"
    h="${h%%:*}"
  fi
  printf '%s' "$h"
}

HOST="$(normalize_host "${IONOS_SFTP_HOST:-}")"
USER="$(trim "${IONOS_SFTP_USER:-}")"
PASS="$(trim "${IONOS_SFTP_PASSWORD:-}")"
REMOTE="$(trim "${IONOS_SFTP_REMOTE_DIR:-collective}")"
[[ -z "$REMOTE" ]] && REMOTE="collective"
PORT="${IONOS_SFTP_PORT:-${PORT:-22}}"

if [[ -z "$HOST" || -z "$USER" || -z "$PASS" ]]; then
  echo "Missing IONOS_SFTP_HOST, IONOS_SFTP_USER, or IONOS_SFTP_PASSWORD." >&2
  echo "Add them as GitHub Actions secrets, then re-run Deploy to IONOS." >&2
  exit 1
fi

if [[ "$HOST" == "sftp" || "$HOST" == "ftp" || "$HOST" == "ftps" || "$HOST" != *.* ]]; then
  echo "IONOS_SFTP_HOST must be the server hostname from IONOS (example: access123456789.webspace-data.io)." >&2
  echo "Do not use the protocol word 'sftp'. A leading sftp:// is stripped automatically." >&2
  exit 1
fi

if [[ ! -f out/index.html ]]; then
  echo "Missing out/index.html. Run npm run build first." >&2
  exit 1
fi

if ! command -v sshpass >/dev/null || ! command -v sftp >/dev/null; then
  echo "Need sshpass and sftp (openssh-client) on PATH." >&2
  exit 1
fi

batch="$(mktemp)"
trap 'rm -f "$batch"' EXIT

{
  if [[ "$REMOTE" != "." ]]; then
    printf 'mkdir %s\n' "$REMOTE"
    printf 'cd %s\n' "$REMOTE"
  fi

  find out -type d -print | sed 's|^out||; s|^/||' | sort | while read -r dir; do
    [[ -z "$dir" ]] && continue
    printf 'mkdir %s\n' "$dir"
  done

  # Include dotfiles such as .htaccess (IONOS Apache).
  find out -type f -print | sort | while read -r file; do
    rel="${file#out/}"
    printf 'put "%s" "%s"\n' "$file" "$rel"
  done

  printf 'bye\n'
} >"$batch"

export SSHPASS="$PASS"
# Interactive stdin (not -b): IONOS SFTP often errors on mkdir-if-exists and would abort a batch.
sshpass -e sftp -oBatchMode=no -oStrictHostKeyChecking=accept-new -P "$PORT" "$USER@$HOST" <"$batch"

echo "Uploaded out/ to IONOS ${REMOTE} over SFTP."
