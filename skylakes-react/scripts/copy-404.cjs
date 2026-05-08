const fs = require('fs');
const path = require('path');

const distIndex = path.resolve(__dirname, '..', 'dist', 'index.html');
const dist404 = path.resolve(__dirname, '..', 'dist', '404.html');

try {
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, dist404);
    console.log('Copied index.html to 404.html');
  } else {
    console.warn('dist/index.html not found — run build before running this script');
  }
} catch (err) {
  console.error('Failed to copy index.html to 404.html', err);
  process.exit(1);
}
