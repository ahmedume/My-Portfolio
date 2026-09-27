import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Pages serves the app from https://ahmedume.github.io/My-Portfolio/, so the
// production build needs the repo name in the base path. Dev stays at "/".
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
