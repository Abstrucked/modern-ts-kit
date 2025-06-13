import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'node20',
  sourcemap: true,
  splitting: false,
  clean: true,
  dts: true, // if you want .d.ts files
})
