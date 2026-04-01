const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'skylakes-react', 'src', 'components');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  content = content.replace(/<br>/g, '<br/>');
  content = content.replace(/<img([^>]*[^/])>/g, '<img$1 />');
  content = content.replace(/<input([^>]*[^/])>/g, '<input$1 />');
  content = content.replace(/<hr([^>]*[^/])>/g, '<hr$1 />');
  fs.writeFileSync(path.join(srcDir, file), content);
});
console.log('Fixed unclosed tags');
