if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/08/02/hello-world/index.html",revision:"952c5c0ae3ece8be39b2de537c9d4b59"},{url:"2021/08/02/TEST/index.html",revision:"19a7c8a6c44b3a07bdf7b99e388aa035"},{url:"about/index.html",revision:"36d98cb85510372f1ea845a876dfd3da"},{url:"archives/2021/08/index.html",revision:"17906e5d03667bc9908c88267cf18327"},{url:"archives/2021/index.html",revision:"9c28d3dd657c063798f1718114768b4a"},{url:"archives/index.html",revision:"c07106b891ccda80cdde92e626c20fac"},{url:"categories/index.html",revision:"f9f21cbd239fed6a9856beda6d44da11"},{url:"categories/生活趣闻/index.html",revision:"a5ba8bad21baf3cc2f79a1e98eb2c3c8"},{url:"categories/随想/index.html",revision:"820b8d89649ab4f6089d10b61abcdf89"},{url:"css/index.css",revision:"01a345c41c3988d594c62e239a061a39"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"galleryGroup/index.html",revision:"f779d401623608d09c810cebacfdd44d"},{url:"galleryGroup/picture/20210720125345.jpg",revision:"22ee47952490de081ab2516d263db52c"},{url:"img/1441607617878500.gif",revision:"a738d63ec9f09ca087d5b7b3fb6dce8a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/friend_404.gif",revision:"232c10434108c414914474d6d2c9d78c"},{url:"index.html",revision:"37daaa4355fc56358772ee5a43bd2a5b"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"183de695f70cbf90a1df1157c6890eef"},{url:"tags/index.html",revision:"2391058e049813390f16df5dda8770d6"},{url:"tags/文字/index.html",revision:"07665c391ee3e865e3100b30f56a859b"},{url:"tags/测试/index.html",revision:"79c912ea31787920e8c5193a9a381071"},{url:"tags/生活/index.html",revision:"f85af8671f268e517d7c4007ab13e779"},{url:"tags/随笔/index.html",revision:"7788cc9a11e71402bbb505ea7b99abe1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
