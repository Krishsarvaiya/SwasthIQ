// Adds a copyright header to every .ts/.tsx file under src/. Safe to re-run.
// Usage: node scripts/add-license-headers.mjs [--dry]
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const HEADER = `/*
 * Copyright (c) 2026 Krish Sarvaiya. All rights reserved.
 * Proprietary. Not licensed for copying or reuse. See LICENSE in the repository root.
 */
`;
const dry = process.argv.includes('--dry');
let added = 0, skipped = 0;

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!['.ts', '.tsx'].includes(extname(p))) continue;
    const text = readFileSync(p, 'utf8');
    if (text.slice(0, 400).includes('All rights reserved')) { skipped++; continue; }
    if (!dry) writeFileSync(p, HEADER + '\n' + text, 'utf8');
    added++;
    console.log((dry ? 'would add: ' : 'added: ') + p);
  }
};
walk('src');
console.log(`${dry ? 'Would add' : 'Added'} ${added}, skipped ${skipped}.`);
