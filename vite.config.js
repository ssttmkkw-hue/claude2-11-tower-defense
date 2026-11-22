import { defineConfig } from 'vite';

// Relative base so the build works under any sub-path (e.g. GitHub Pages /claude2-11-tower-defense/).
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
  },
});
