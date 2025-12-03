import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'robots.txt', 'src/assets/image/profile.jpeg'],
  manifest: {
    name: 'Portafolio Luis Zeballos',
    short_name: 'Luis Zeballos',
    start_url: '/',
    display: 'standalone',
    background_color: '#00381cff',
    icons: [
      {
        src: '/assets/image/profile.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/assets/image/profile.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      }
    ]
  }
})

  ]
})
