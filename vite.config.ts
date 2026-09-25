import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Relative base path ensures assets load properly on GitHub Pages (e.g. username.github.io/repo-name/)
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'generate-gh-pages-404',
        closeBundle() {
          const distDir = path.resolve(process.cwd(), 'dist');
          const indexFile = path.resolve(distDir, 'index.html');
          const notFoundFile = path.resolve(distDir, '404.html');
          if (fs.existsSync(indexFile)) {
            fs.copyFileSync(indexFile, notFoundFile);
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
