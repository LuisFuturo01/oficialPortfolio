import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as VitePWA from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA.default({
      srcDir: 'public',
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
            src: '/assets/image/profile.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
          },
        ],
      },
    }),
  ],
});
