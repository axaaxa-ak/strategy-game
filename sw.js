/* Eucronia offline cache */
const CACHE='eucronia-v1';
const CORE=['./','index.html','MapChart_Map.svg','era-1936.js','era-1939.js','era-1944.js','era-1914.js','era-2000.js','era-1453.js','era-free.js','https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap'];
self.addEventListener('install',function(e){e.waitUntil((async function(){var c=await caches.open(CACHE);for(var i=0;i<CORE.length;i++){try{await c.add(new Request(CORE[i],{cache:'reload'}));}catch(err){}}await self.skipWaiting();})());});
self.addEventListener('activate',function(e){e.waitUntil((async function(){var ks=await caches.keys();await Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));await self.clients.claim();})());});
self.addEventListener('fetch',function(e){var req=e.request;if(req.method!=='GET')return;e.respondWith((async function(){var cache=await caches.open(CACHE);
 if(req.mode==='navigate'){try{var res=await fetch(req);if(res&&res.ok)cache.put(req,res.clone());return res;}catch(err){var nav=(await cache.match(req,{ignoreSearch:true}))||(await cache.match('index.html',{ignoreSearch:true}));return nav||new Response('offline',{status:503});}}
 var hit=await cache.match(req,{ignoreSearch:true});
 if(hit){fetch(req).then(function(r){if(r&&(r.ok||r.type==='opaque'))cache.put(req,r);}).catch(function(){});return hit;}
 try{var r2=await fetch(req);if(r2&&(r2.ok||r2.type==='opaque'))cache.put(req,r2.clone());return r2;}catch(err2){return new Response('',{status:503});}
})());});
