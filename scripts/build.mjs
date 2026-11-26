import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('../out/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const asset of ['index.html', 'styles.css', 'rails.js', 'contact.js', 'assets']) {
  await cp(new URL(`../${asset}`, import.meta.url), new URL(asset, output), { recursive: true });
}
