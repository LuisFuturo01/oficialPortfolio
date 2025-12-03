import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';

// Permite activar nuevas versiones automáticamente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Precaching
precacheAndRoute(self.__WB_MANIFEST || []);

// HTML → red primero
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'html-cache',
    networkTimeoutSeconds: 3,
    plugins: [
      {
        cacheWillUpdate: async ({ response }) => {
          return response && response.ok ? response : null;
        },
      },
    ],
  })
);

// Archivos estáticos → caché primero
registerRoute(
  ({ request }) =>
    ['image', 'script', 'style'].includes(request.destination),
  new CacheFirst({
    cacheName: 'static-resources',
    plugins: [
      {
        cacheWillUpdate: async ({ response }) => {
          return response && response.ok ? response : null;
        },
      },
    ],
  })
);

// Fonts (opcional)
registerRoute(
  ({ url }) => url.origin.includes('fonts.gstatic.com'),
  new CacheFirst({
    cacheName: 'google-fonts-cache',
  })
);
