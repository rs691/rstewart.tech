// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://rs691.github.io/',
   base: '/rstewart.tech/',
  integrations: [react(), sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});