const fs = require('fs');
const path = require('path');

function wrapComponent(filename, openTag, closeTag) {
  const p = path.join(__dirname, 'skylakes-react', 'src', 'components', filename + '.jsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    // The components currently return:
    //   export default function Name() {
    //     return (
    //       <>
    //         ...
    //       </>
    //     );
    //   }
    // We want to replace `<>` with openTag and `</>` with closeTag
    content = content.replace(/return\s*\(\s*<>/, `return (\n    ${openTag}`);
    content = content.replace(/<\/>\s*\);\s*}\s*$/, `${closeTag}\n  );\n}\n`);
    fs.writeFileSync(p, content);
    console.log(`Wrapped ${filename}`);
  }
}

wrapComponent('Mission', '<section id="mission">', '</section>');
wrapComponent('Milestones', '<section id="milestones">', '</section>');
wrapComponent('Tech', '<section id="tech">', '</section>');
wrapComponent('Blog', '<section id="blog">', '</section>');
// Quote has <section class="quote-section"> in HTML
wrapComponent('Quote', '<section className="quote-section">', '</section>');
wrapComponent('Footer', '<footer>', '</footer>');
