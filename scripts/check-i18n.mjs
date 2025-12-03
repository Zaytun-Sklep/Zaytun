import fs from 'node:fs';
import path from 'node:path';

const localesDir = path.resolve('src/i18n/locales');
const files = fs.readdirSync(localesDir).filter((f) => f.endsWith('.json'));

function getKeys(obj, prefix = '') {
  return Object.keys(obj).flatMap((key) => {
    const val = obj[key];
    const full = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      return getKeys(val, full);
    }
    return [full];
  });
}

function readJson(file) {
  const content = fs.readFileSync(file, 'utf8');
  return JSON.parse(content);
}

const baselineName = 'pl.json';
const baselinePath = path.join(localesDir, baselineName);
const baseline = readJson(baselinePath);
const baselineKeys = new Set(getKeys(baseline));

let hasIssues = false;

for (const file of files) {
  const filePath = path.join(localesDir, file);
  const data = readJson(filePath);
  const keys = new Set(getKeys(data));

  const missing = Array.from(baselineKeys).filter((k) => !keys.has(k));
  const extra = Array.from(keys).filter((k) => !baselineKeys.has(k));

  if (missing.length || extra.length) {
    hasIssues = true;
    console.log(`\nLocale: ${file}`);
    if (missing.length) {
      console.log(`  Missing keys (${missing.length}):`);
      missing.forEach((k) => console.log(`    - ${k}`));
    }
    if (extra.length) {
      console.log(`  Extra keys (${extra.length}):`);
      extra.forEach((k) => console.log(`    - ${k}`));
    }
  }
}

if (!hasIssues) {
  console.log('All locale files match the baseline key schema.');
}
