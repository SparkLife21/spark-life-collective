#!/usr/bin/env bash
# Upload ./out to IONOS over SFTP (GitHub Actions → hosting).
# Default remote directory is collective (webspace /collective).
# Required: IONOS_SFTP_HOST IONOS_SFTP_USER IONOS_SFTP_PASSWORD
# Optional: IONOS_SFTP_REMOTE_DIR (default collective)  IONOS_SFTP_PORT (default 22)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

HOST="${IONOS_SFTP_HOST:-}"
USER="${IONOS_SFTP_USER:-}"
PASS="${IONOS_SFTP_PASSWORD:-}"
REMOTE="${IONOS_SFTP_REMOTE_DIR:-collective}"
PORT="${IONOS_SFTP_PORT:-22}"

if [[ -z "$HOST" || -z "$USER" || -z "$PASS" ]]; then
  echo "Missing IONOS_SFTP_HOST, IONOS_SFTP_USER, or IONOS_SFTP_PASSWORD." >&2
  echo "Add them as GitHub Actions secrets, then re-run Deploy to IONOS." >&2
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
