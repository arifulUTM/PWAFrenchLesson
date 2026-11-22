// Bump this version whenever you change index.html or sw.js
const C='fr-a1-v2';
const SHELL=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','data/lessons/lesson-1.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;
  if(/\.(mp3|m4a|ogg|wav)$/i.test(u.pathname))return; // audio streams straight from the network
  const keep=r=>{if(r.ok){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r};
  if(u.pathname.includes('/data/lessons/')){ // always try fresh lessons first
    e.respondWith(fetch(e.request).then(keep).catch(()=>caches.match(e.request)));return}
  e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(keep)));
});
