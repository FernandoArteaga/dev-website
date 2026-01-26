import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fernandoarteaga.dev',
  integrations: [mdx(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});