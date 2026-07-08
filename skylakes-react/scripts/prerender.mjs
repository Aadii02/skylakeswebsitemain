// Postbuild prerender: renders each route to static HTML with per-route meta
// tags, and generates sitemap.xml. Runs after `vite build` + the SSR bundle
// build (see the "build" script in package.json).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

if (!fs.existsSync(serverEntry)) {
  console.error('dist-server/entry-server.js not found — run "npm run build" (the SSR build step produces it).');
  process.exit(1);
}

const { render, routes, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } = await import(
  pathToFileURL(serverEntry).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  console.error('dist/index.html is missing the <!--app-html--> / <!--app-head--> anchors.');
  process.exit(1);
}

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

for (const route of routes) {
  let appHtml;
  try {
    appHtml = render(route.path);
  } catch (err) {
    console.error(`Prerender failed for ${route.path}:`, err);
    process.exit(1);
  }

  const url = SITE_URL + (route.path === '/' ? '/' : route.path);
  const image = SITE_URL + DEFAULT_OG_IMAGE;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const ogType = route.path.startsWith('/blog/') ? 'article' : 'website';

  const head = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join('\n    ');

  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', appHtml);

  const outPath = path.join(dist, route.outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`Prerendered ${route.path} -> dist/${route.outFile}`);
}

// sitemap.xml from the same route table
const buildDate = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const url = SITE_URL + (route.path === '/' ? '/' : route.path);
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${route.lastmod || buildDate}</lastmod>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log('Generated dist/sitemap.xml');
