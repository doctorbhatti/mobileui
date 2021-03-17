const staticDevCoffee = "mobileui-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/dark.css",
  "/script.js",
  "/theme.js",
  "/reframe.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })