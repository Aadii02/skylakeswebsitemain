const fs = require('fs');
const path = require('path');

const distIndex = path.resolve(__dirname, '..', 'dist', 'index.html');
const dist404 = path.resolve(__dirname, '..', 'dist', '404.html');

try {
  if (fs.existsSync(distIndex)) {
    // 404.html only serves genuinely unknown URLs now (real routes have
    // prerendered static files), so keep it out of search indexes.
    const html = fs
      .readFileSync(distIndex, 'utf8')
      .replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>');
    fs.writeFileSync(dist404, html);
    console.log('Copied index.html to 404.html (with noindex)');
  } else {
    console.warn('dist/index.html not found — run build before running this script');
  }
} catch (err) {
  console.error('Failed to copy index.html to 404.html', err);
  process.exit(1);
}
