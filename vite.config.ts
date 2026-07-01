import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the build work at any URL, including
// https://USERNAME.github.io/sunny-web-studio/
export default defineConfig({
  plugins: [react()],
  base: './',
});
