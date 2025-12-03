import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';

// Precaching de los recursos estáticos
precacheAndRoute(self.__WB_MANIFEST || []);

// Estrategia para las solicitudes de red
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'html-cache',
    networkTimeoutSeconds: 3,
    plugins: [
      {
        cacheWillUpdate: async ({ response }) => {
          if (response && response.ok) {
            return response;
          }
          return null;
        },
      },
    ],
  })
);

// Estrategia para los recursos estáticos
registerRoute(
  ({ request }) =>
    request.destination === 'image' || request.destination === 'script' || request.destination === 'style',
  new CacheFirst({
    cacheName: 'static-resources',
    plugins: [
      {
        cacheWillUpdate: async ({ response }) => {
          if (response && response.ok) {
            return response;
          }
          return null;
        },
      },
    ],
  })
);
