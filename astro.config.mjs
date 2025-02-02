import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sitedomain.com',
  output: 'server',
  image: {
    domains: ['cdn.sanity.io']
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sanity({
    projectId: 'kopfbx3j',
    dataset: 'production',
    apiVersion: '2022-11-16',
    useCdn: true
  }), sitemap(), icon(), react()],
  adapter: netlify()
});