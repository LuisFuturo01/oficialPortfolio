import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePWA from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      srcDir: 'public', // Especificamos que el service worker está en la carpeta public
      filename: 'service-worker.js',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Portafolio Luis Zeballos',
        short_name: 'Luis Zeballos',
        start_url: '/',
        display: 'standalone',
        background_color: '#00381cff',
        icons: [
          {
            src: '/assets/image/profile.jpg', // Ruta correcta dentro de public
            sizes: '192x192',
            type: 'image/jpeg',
          },
        ],
      },
    }),
  ],
});
