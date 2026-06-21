import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../js/language-router.js', import.meta.url), 'utf8');

function runScenario(url, preference, switchLanguage = null) {
  const storage = new Map();
  if (preference) storage.set('portfolio-language', preference);
  let redirectedTo = null;
  let clickHandler = null;

  const locationUrl = new URL(url);
  const location = {
    pathname: locationUrl.pathname,
    search: locationUrl.search,
    hash: locationUrl.hash,
    href: locationUrl.href,
    replace(value) { redirectedTo = value; }
  };

  const link = switchLanguage ? {
    getAttribute(name) {
      return name === 'data-language-switch' ? switchLanguage : null;
    },
    addEventListener(event, handler) {
      if (event === 'click') clickHandler = handler;
    }
  } : null;

  const context = {
    URL,
    Set,
    window: {
      location,
      localStorage: {
        getItem(key) { return storage.get(key) ?? null; },
        setItem(key, value) { storage.set(key, value); }
      }
    },
    document: {
      addEventListener(event, handler) {
        if (event === 'DOMContentLoaded') handler();
      },
      querySelectorAll() {
        return link ? [link] : [];
      }
    }
  };

  vm.runInNewContext(source, context);
  if (clickHandler) clickHandler();
  return { redirectedTo, stored: storage.get('portfolio-language') ?? null };
}

assert.equal(runScenario('https://example.com/portfolio/index.html', null).redirectedTo, null);
assert.equal(
  runScenario('https://example.com/portfolio/yogibo.html?ref=work#impact', 'ja').redirectedTo,
  'https://example.com/portfolio/ja/yogibo.html?ref=work#impact'
);
assert.equal(runScenario('https://example.com/portfolio/ja/yogibo.html', 'ja').redirectedTo, null);
assert.equal(
  runScenario('https://example.com/portfolio/ja/futureverse.html#results', 'en').redirectedTo,
  'https://example.com/portfolio/futureverse.html#results'
);
assert.equal(runScenario('https://example.com/portfolio/index.html', null, 'ja').stored, 'ja');
assert.equal(runScenario('https://example.com/portfolio/ja/index.html', 'ja', 'en').stored, 'en');

console.log('Language router tests passed: persistence, counterpart redirects, query/hash preservation, and toggle storage.');
