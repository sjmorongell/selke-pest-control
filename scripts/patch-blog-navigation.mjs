import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/app/App.tsx';
let source = readFileSync(path, 'utf8');
let changed = false;

const replacements = [
  [
    '<a href="#tips" className="text-gray-700 hover:text-cyan-500 transition-colors">Tips</a>',
    '<a href="/blog" className="text-gray-700 hover:text-cyan-500 transition-colors">Blog</a>',
  ],
  ["['Pest Tips', '#tips']", "['Blog', '/blog']"],
];

for (const [search, replacement] of replacements) {
  if (!source.includes(replacement) && source.includes(search)) {
    source = source.replace(search, replacement);
    changed = true;
  }
}

if (changed) {
  writeFileSync(path, source);
  console.log('Blog navigation links applied.');
} else {
  console.log('Blog navigation links already present.');
}
