import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const pageNames = ['index.html', 'yogibo.html', 'robodachi.html', 'futureverse.html', 'other-works.html'];
const allPages = [
  ...pageNames.map((name) => path.join(root, name)),
  ...pageNames.map((name) => path.join(root, 'ja', name))
];
const failures = [];

for (const file of allPages) {
  const html = fs.readFileSync(file, 'utf8');
  const isJapanese = path.basename(path.dirname(file)) === 'ja';

  if (!html.includes(`<html lang="${isJapanese ? 'ja' : 'en'}">`)) {
    failures.push(`${path.relative(root, file)} has the wrong html lang value`);
  }
  if (!html.includes('data-language-switch=')) {
    failures.push(`${path.relative(root, file)} is missing the language switch`);
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|#|data:|javascript:)/.test(target)) continue;
    const withoutFragment = target.split('#')[0].split('?')[0];
    if (!withoutFragment) continue;
    const resolved = path.resolve(path.dirname(file), withoutFragment);
    if (!fs.existsSync(resolved)) {
      failures.push(`${path.relative(root, file)} -> missing ${target}`);
    }
  }

  if (isJapanese) {
    for (const match of html.matchAll(/href="([^"]+\.html(?:#[^"]*)?)"/g)) {
      const target = match[1];
      if (target.startsWith('../')) continue;
      const resolved = path.resolve(path.dirname(file), target.split('#')[0]);
      if (path.dirname(resolved) !== path.join(root, 'ja')) {
        failures.push(`${path.relative(root, file)} has a non-Japanese internal page link: ${target}`);
      }
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Validated ${allPages.length} localized pages: language tags, switches, links, and assets are correct.`);
