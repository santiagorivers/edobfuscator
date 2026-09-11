const CACHE = "edofuscator-v2.3.0";
const CORE = ["./EdOfuscator-Mobile.html", "./manifest.json"];

self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(CORE); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; })
      .map(function(k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function(hit) {
      return hit || fetch(e.request).then(function(resp) {
        var copia = resp.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, copia); });
        return resp;
      }).catch(function() { return hit; });
    })
  );
});
