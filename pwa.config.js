import { VitePWA } from 'vite-plugin-pwa';

export default VitePWA({
  manifest: {
    name: 'AiFriends',
    short_name: 'AF',
    start_url: '/AF/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/pwa-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
});
