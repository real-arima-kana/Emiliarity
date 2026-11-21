const CACHE='emiliarity-v20-fullscreen';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./emilia-peek.png','./emilia-top.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{})}return r}).catch(()=>caches.match(e.request)))});

// Tapping a system notification returns to Emiliarity; dismissing it has no effect on the task.
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const destination=new URL('./',self.registration.scope).href;
  event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async clients=>{
    for(const client of clients){
      if(new URL(client.url).origin===new URL(destination).origin){
        if('focus' in client)return client.focus();
      }
    }
    if(self.clients.openWindow)return self.clients.openWindow(destination);
  }));
});
