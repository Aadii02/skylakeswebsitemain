const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('skylakes-aerospace.html', 'utf8');

// Helper to convert HTML to JSX
function htmlToJsx(str) {
  return str
    .replace(/class=/g, 'className=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/clip-path=/g, 'clipPath=')
    .replace(/mix-blend-mode=/g, 'mixBlendMode=')
    .replace(/pointer-events=/g, 'pointerEvents=')
    .replace(/onclick="[^"]*"/g, '')
    // Replace specific inline styles found in the document
    .replace(/style="font-size:0\.65rem; padding:12px 24px;"/g, "style={{ fontSize: '0.65rem', padding: '12px 24px' }}")
    .replace(/style="font-size:0\.6em; -webkit-text-fill-color: var\(--muted2\); background:none; color: var\(--muted2\);"/g, "style={{ fontSize: '0.6em', WebkitTextFillColor: 'var(--muted2)', background: 'none', color: 'var(--muted2)' }}")
    .replace(/style="transition-delay:0\.2s"/g, "style={{ transitionDelay: '0.2s' }}")
    .replace(/style="width:100%;height:100%;min-height:280px;background:linear-gradient\(135deg,#0d1b2a,#1c3a5a\);display:flex;align-items:center;justify-content:center;"/g, "style={{ width: '100%', height: '100%', minHeight: '280px', background: 'linear-gradient(135deg, #0d1b2a, #1c3a5a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}")
    .replace(/style="transition-delay:0\.3s"/g, "style={{ transitionDelay: '0.3s' }}")
    .replace(/style="transition-delay:0\.15s"/g, "style={{ transitionDelay: '0.15s' }}")
    .replace(/style="white-space:nowrap"/g, "style={{ whiteSpace: 'nowrap' }}")
    .replace(/style="width:100%;height:200px;background:linear-gradient\(135deg,#0d1b2a 0%,#1e3a5f 100%\);display:flex;align-items:center;justify-content:center;"/g, "style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, #0d1b2a 0%, #1e3a5f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}")
    .replace(/style="width:100%;padding:18px;font-size:0\.75rem;cursor:pointer;"/g, "style={{ width: '100%', padding: '18px', fontSize: '0.75rem', cursor: 'pointer' }}")
    .replace(/style="color:var\(--muted\);font-size:0\.875rem;line-height:1\.75;"/g, "style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.75' }}")
    .replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
}

function extractSection(regex, name, importContent = '') {
  const match = html.match(regex);
  if (match) {
    let content = htmlToJsx(match[1].trim());
    if (name === 'FAQ') {
      // For FAQ, we need to handle state for the toggles instead of vanilla JS
      content = content.replace(/<div className="faq-item reveal">/g, '<FaqItem>');
      content = content.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div></FaqItem>'); // This is highly specific and brittle, so I will build FAQ manually later
      // Wait, let's just extract it as is and fix manually if needed. Or write a better FAQ component.
    }
    const componentCode = `import React from 'react';\n${importContent}\n\nexport default function ${name}() {\n  return (\n    <>\n      ${content}\n    </>\n  );\n}\n`;
    fs.writeFileSync(`skylakes-react/src/components/${name}.jsx`, componentCode);
    console.log(`Created ${name}.jsx`);
    return true;
  }
  return false;
}

if (!fs.existsSync('skylakes-react/src/components')) {
  fs.mkdirSync('skylakes-react/src/components', { recursive: true });
}

// Extract sections using robust REGEX
extractSection(/<nav>([\s\S]*?)<\/nav>/, 'Navbar');
extractSection(/<section className="hero">([\s\S]*?)<\/section>/, 'Hero'); // Note: 'class=' will be matched pre-htmlToJsx, so use original
extractSection(/<section class="hero">([\s\S]*?)<\/section>/, 'Hero');
extractSection(/<section id="mission">([\s\S]*?)<\/section>/, 'Mission');
extractSection(/<section id="milestones">([\s\S]*?)<\/section>/, 'Milestones');
extractSection(/<section id="tech">([\s\S]*?)<\/section>/, 'Tech');
extractSection(/<section id="blog">([\s\S]*?)<\/section>/, 'Blog');
extractSection(/<section class="quote-section">([\s\S]*?)<\/section>/, 'Quote');
extractSection(/<section id="contact">([\s\S]*?)<\/section>/, 'Contact');
extractSection(/<footer>([\s\S]*?)<\/footer>/, 'Footer');

// the FAQ is tricky because of the click handler but we can write a custom one or just dump it and fix it
let faqMatch = html.match(/<section id="faq">([\s\S]*?)<\/section>/);
if (faqMatch) {
  let f = htmlToJsx(faqMatch[1]);
  // Just dump it into FAQ.jsx, we will manually fix the state logic
  const componentCode = `import React, { useState } from 'react';\n\nexport default function FAQ() {\n  const [openIndex, setOpenIndex] = useState(null);\n  const toggleFaq = (idx) => setOpenIndex(openIndex === idx ? null : idx);\n\n  return (\n    <section id="faq">\n      <div className="faq-section">\n        <div className="faq-header reveal">\n          <div className="section-label">Got Questions?</div>\n          <h2 className="section-title">Frequently Asked<br/>Questions</h2>\n        </div>\n\n        {/* FAQ Items will need manual wiring, this is a placeholder */}\n        ${f}\n      </div>\n    </section>\n  );\n}\n`;
  fs.writeFileSync('skylakes-react/src/components/FAQ.jsx', componentCode);
  console.log('Created FAQ.jsx');
}

console.log('Extraction complete');
