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
  [
    '<li><a href="#tips" className="hover:text-cyan-400 transition-colors">Tips &amp; Resources</a></li>',
    '<li><a href="/blog" className="hover:text-cyan-400 transition-colors">Pest Control Blog</a></li>',
  ],
  [
    `                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a>
                </li>
              </ul>`,
    `                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:sales@selkepestcontrol.com" className="hover:text-cyan-400 transition-colors">sales@selkepestcontrol.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>License# 2215P</span>
                </li>
              </ul>`,
  ],
];

for (const [search, replacement] of replacements) {
  if (source.includes(search)) {
    source = source.replaceAll(search, replacement);
    changed = true;
  }
}

if (!source.includes('<a href="/blog" className="text-gray-700 hover:text-cyan-500 transition-colors">Blog</a>')) {
  throw new Error('Desktop Blog navigation link was not found after patching.');
}

if (!source.includes("['Blog', '/blog']")) {
  throw new Error('Mobile Blog navigation link was not found after patching.');
}

if (!source.includes('<span>License# 2215P</span>')) {
  throw new Error('Footer license credential was not found after patching.');
}

if (changed) {
  writeFileSync(path, source);
  console.log('Blog navigation links applied.');
} else {
  console.log('Blog navigation links already present.');
}
