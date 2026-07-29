import { defineConfig } from 'astro/config';
import tailwindvite from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://coolpvt.alexavolt.ro',
  base: '/',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindvite()],
  },
});
