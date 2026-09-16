// The public pages are hand-written static HTML in homepage/. Next builds the
// remaining routes, then this copies homepage/ over out/ so the domain serves
// those files exactly as authored.
import { access, cp, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const source = join(root, "homepage");
const out = join(root, "out");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function htmlFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await htmlFiles(path)));
    } else if (entry.name.endsWith(".html")) {
      found.push(relative(source, path));
    }
  }
  return found;
}

if (!(await exists(out))) {
  console.error("out/ is missing. Run next build first.");
  process.exit(1);
}

if (!(await exists(join(source, "index.html")))) {
  console.error("homepage/index.html is missing.");
  process.exit(1);
}

const pages = await htmlFiles(source);
await cp(source, out, { recursive: true, force: true });

console.log(`Static pages applied to out/: ${pages.sort().join(", ")}`);
