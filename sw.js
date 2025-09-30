// sw.js (minimal PWA bootstrap)
self.addEventListener('install', (event) => {
  // Activate new SW immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim clients so the page is controlled right away
  event.waitUntil(self.clients.claim());
});

// Optional: passthrough (no offline cache).
// If you want caching later, add a 'fetch' handler.
