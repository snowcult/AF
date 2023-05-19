import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pwaConfig from './pwa.config.js';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaConfig],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  base: '/AF/', // Specify the base URL as your repository name
});
