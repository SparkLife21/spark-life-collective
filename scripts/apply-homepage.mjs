// The homepage is hand-written static HTML in homepage/. Next builds the rest of
// the routes, then this copies the homepage over out/index.html and adds its
// assets, so the domain root serves that file exactly as authored.
import { access, cp, readdir } from "node:fs/promises";
import { join } from "node:path";

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

if (!(await exists(out))) {
  console.error("out/ is missing. Run next build first.");
  process.exit(1);
}

if (!(await exists(join(source, "index.html")))) {
  console.error("homepage/index.html is missing.");
  process.exit(1);
}

await cp(join(source, "index.html"), join(out, "index.html"));
await cp(join(source, "assets"), join(out, "assets"), { recursive: true });

const assets = await readdir(join(out, "assets"));
console.log(`Homepage applied: out/index.html + ${assets.length} files in out/assets/`);
