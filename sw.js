const CACHE_NAME = "flashcards-pwa-v3-e22fbbb517bd";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  "./icon-192.png",
  "./icon-512.png"
];

// Assets that should update when online, but also work offline
const DATA_ASSETS = [
  "./deck_default.csv",
  "./deck_meta.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE_ASSETS.concat(DATA_ASSETS));
  })());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => (k.startsWith("flashcards-pwa-") && k !== CACHE_NAME) ? caches.delete(k) : Promise.resolve()));
    self.clients.claim();
  })());
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (e) {
    const cached = await cache.match(req);
    return cached || Response.error();
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  cache.put(req, res.clone());
  return res;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== self.location.origin) return;

  // Navigation -> serve index.html (cache-first)
  if (req.mode === "navigate") {
    event.respondWith(cacheFirst("./index.html"));
    return;
  }

  // Data assets -> network-first (keeps updated when online)
  if (url.pathname.endsWith("/deck_default.csv") || url.pathname.endsWith("/deck_meta.json")) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Everything else -> cache-first
  event.respondWith(cacheFirst(req));
});
