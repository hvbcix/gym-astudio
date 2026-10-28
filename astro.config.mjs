// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// SITE_URL i BASE_PATH ustawia workflow GitHub Pages. Na Vercelu i z własną domeną nie są potrzebne.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  server: { port: 4417, host: true },
  vite: {
    plugins: [tailwindcss()]
  }
});
