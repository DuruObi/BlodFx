import { build } from 'esbuild';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const production = process.argv.includes('--production');

async function run() {
  try {
    const outdir = resolve(__dirname, '../dist');

    // remove previous build
    await fs.rm(outdir, { recursive: true, force: true }).catch(() => {});

    // bundle with esbuild
    await build({
      entryPoints: [resolve(__dirname, '../src/main.tsx')],
      bundle: true,
      sourcemap: !production,
      minify: production,
      target: ['es2020'],
      outdir,
      loader: { '.png': 'file', '.svg': 'file', '.css': 'css' },
      define: { 'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development') },
      logLevel: 'info',
    });

    console.log(`Build complete (${production ? 'production' : 'development'}) -> ${outdir}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
