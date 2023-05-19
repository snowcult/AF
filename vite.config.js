import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pwaConfig from './pwa.config.js';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaConfig],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
  base: '/AF/',
});
