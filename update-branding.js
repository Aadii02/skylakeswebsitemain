const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'skylakes-react', 'src');
const componentsDir = path.join(srcDir, 'components');

// 1. Update index.css
const cssPath = path.join(srcDir, 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace fonts
css = css.replace(/Orbitron(.*?)(?=&)/g, 'Montserrat:wght@400;600;700;800;900');
css = css.replace(/'Orbitron'/g, "'Montserrat'");
css = css.replace(/'Syne'/g, "'Montserrat'");
css = css.replace(/'Syne Mono'/g, "'Montserrat'");

// Replace accent colors (from orange to vibrant sky blue)
// Orange: #f97316, rgba(249,115,22,...)
// Sky Blue: #60A5FA, rgba(96,165,250,...)
// Lighter Blue: #93C5FD
css = css.replace(/#f97316/g, '#60A5FA'); // primary
css = css.replace(/#fb923c/g, '#93C5FD'); // accent2
css = css.replace(/249,115,22/g, '96,165,250');
css = css.replace(/#c2410c/g, '#1D4ED8'); // dark orange to dark blue
css = css.replace(/#7c2d12/g, '#1E3A8A'); // even darker orange to navy
css = css.replace(/#1c0a00/g, '#0B1120'); // near black

fs.writeFileSync(cssPath, css);
console.log('Updated index.css theme and fonts');

// 2. Replace 'SkyLakes' with 'SKYLX' across all components
function updateTextInDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateTextInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Update instances of 'SkyLakes AeroSpace' or 'SkyLakes'
      content = content.replace(/SkyLakes/g, 'SKYLX');
      
      // Update the inline color stylings for SVGs or spans if present
      content = content.replace(/249,115,22/g, '96,165,250'); // inside Hero.jsx SVG
      content = content.replace(/#f97316/g, '#60A5FA');
      content = content.replace(/#fb923c/g, '#93C5FD');

      fs.writeFileSync(fullPath, content);
    }
  });
}

updateTextInDir(srcDir);
console.log('Updated text and inline colors to SKYLX branding');
