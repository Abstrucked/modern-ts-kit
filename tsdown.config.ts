import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'node20',
  sourcemap: true,
  clean: true,
  dts: true, // if you want .d.ts files
})
