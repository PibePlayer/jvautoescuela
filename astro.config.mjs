// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://jvautoescuela.com.ar', // TODO: dominio final
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  adapter: cloudflare({
    // Las imágenes ya están optimizadas (WebP) en /public: no hace falta el binding de Cloudflare Images.
    imageService: 'passthrough',
  }),
});