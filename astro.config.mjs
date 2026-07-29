import { defineConfig } from 'astro/config';
import tailwindvite from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.alexavolt.ro',
  base: '/coolpvt',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindvite()],
  },
});
