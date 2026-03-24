const fs = require('fs');

const html = fs.readFileSync('skylakes-aerospace.html', 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/;
const styleMatch = html.match(styleRegex);
if (styleMatch) {
  fs.writeFileSync('skylakes-react/src/index.css', styleMatch[1]);
  console.log('Extracted CSS to index.css');
}

console.log('Done');
