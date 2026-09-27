import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Served from the apex domain via the CNAME in public/, so production is
// rooted at "/". If you drop the custom domain, set this to '/My-Portfolio/'
// and update the assertion in .github/workflows/ci.yml to match.
const PAGES_BASE = '/';

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? PAGES_BASE : '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Videos and cert PDFs live in public/ and are copied verbatim; keep the
      // JS budget tight so the initial page stays small.
      chunkSizeWarningLimit: 700,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
