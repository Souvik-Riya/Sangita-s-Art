self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("v1").then(cache => cache.add("/"))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request)
    )
  );
});
