self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open('squidat-store').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/home.html',
                '/about.html',
                '/contact.html',
                '/manifest.json'

            ]);
        })
    );
})
self.addEventListener('fetch', (e) =>{
    e.respondWith(
        cache.match(e.request). then((respond) =>response || fetch(e.request))
    )
});