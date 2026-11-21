import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const root = resolve("dist");
const localOrigin = "https://probst-lab.local";
const publicOrigin = "https://probstrodolfo.github.io";
const internalOrigins = new Set([localOrigin, publicOrigin]);
const externalSameOriginPaths = new Set(["/CV/"]);

if (!existsSync(root)) {
  console.error("Missing dist/. Run npm run build before checking links.");
  process.exit(1);
}

const walk = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const files = walk(root);
const htmlFiles = files.filter((path) => extname(path) === ".html");
const externalLinks = new Set();
const failures = [];

const pagePath = (file) => {
  const path = relative(root, file).split(sep).join("/");
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.slice(0, -"index.html".length)}`;
  return `/${path}`;
};

const candidateFiles = (pathname) => {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!clean) return [join(root, "index.html")];
  if (pathname.endsWith("/")) return [join(root, clean, "index.html")];
  if (extname(clean)) return [join(root, clean)];
  return [join(root, clean), join(root, `${clean}.html`), join(root, clean, "index.html")];
};

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const current = new URL(pagePath(file), localOrigin);
  const attributes = html.matchAll(/\b(?:href|src)=(?:"([^"]+)"|'([^']+)')/g);

  for (const match of attributes) {
    const value = match[1] ?? match[2];
    if (!value || /^(?:data:|mailto:|tel:|javascript:)/i.test(value)) continue;

    let target;
    try {
      target = new URL(value, current);
    } catch {
      failures.push(`${pagePath(file)} contains an invalid URL: ${value}`);
      continue;
    }

    if (!internalOrigins.has(target.origin)) {
      externalLinks.add(target.href);
      continue;
    }

    if (target.origin === publicOrigin && externalSameOriginPaths.has(target.pathname)) {
      externalLinks.add(target.href);
      continue;
    }

    const candidates = candidateFiles(target.pathname);
    const destination = candidates.find((path) => existsSync(path));
    if (!destination) {
      failures.push(`${pagePath(file)} links to missing ${target.pathname}`);
      continue;
    }

    if (target.hash && extname(destination) === ".html") {
      const id = decodeURIComponent(target.hash.slice(1));
      const destinationHtml = readFileSync(destination, "utf8");
      const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const anchor = new RegExp(`\\b(?:id|name)=(?:"${escaped}"|'${escaped}')`);
      if (!anchor.test(destinationHtml)) {
        failures.push(`${pagePath(file)} links to missing anchor ${target.pathname}${target.hash}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`Link check failed with ${failures.length} problem${failures.length === 1 ? "" : "s"}:`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML pages: all internal pages, fragments, images, video, and files resolve.`,
);
console.log(`Found ${externalLinks.size} unique external links for manual source verification.`);
