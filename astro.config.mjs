import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro'
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify'
import icon from "astro-icon";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sitedomain.com',
  output: 'server',
  image: {
    domains: ['cdn.sanity.io']
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), sanity({
    projectId: 'kopfbx3j',
    dataset: 'production',
    apiVersion: '2022-11-16',
    useCdn: true
  }), sitemap(), icon(), react()],
  adapter: netlify()
});