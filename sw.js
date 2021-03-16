const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

//A list of local resources we always want to be cached
const PRECACHE_URLS = [
  'index.html',
  './',//alias for index.html
  'style.css',
  'main.js',
  'images2/hello-icon-128.png',
  'images2/hello-icon-144.png',
  'images2/hello-icon-152.png',
  'images2/hello-icon-256.png',
  'images2/hello-icon-512.png',
  'sw.js',
  ];

// The install handler takes care of precaching our resources as directed
self.addEventListener('install',function(event){
event.waitUntil(
  caches.open(PRECACHE).then(function(cache){
    return cache.addAll(PRECACHE_URLS);
  })
  );
});

//activate handler
self.addEventListener('activate',event =>{
  console.log('Service worker activating...');
});

// The fetch handler
self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
    );
});
