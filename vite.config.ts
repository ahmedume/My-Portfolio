import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// The site is served from the project path, not a domain root. Publishing a
// CNAME would move Pages to a custom domain and stop serving this path, so
// there must be no CNAME in public/ until that domain actually resolves.
const PAGES_BASE = '/My-Portfolio/';

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
