if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/08/02/hello-world/index.html",revision:"85c14c8f9c918d67a606e5b29dfe941f"},{url:"2021/08/02/TEST/index.html",revision:"cb7dfcc7c103c80d49324a250988289e"},{url:"about/index.html",revision:"e057c35129527c9963db6eafda15c5b7"},{url:"archives/2021/08/index.html",revision:"21fc6d1d4f7814fbf10e56702ae45cbc"},{url:"archives/2021/index.html",revision:"a22cb5528dc0570c1cd16cf24c5cec43"},{url:"archives/index.html",revision:"5ddb24d77699237a4b27f9ebce36688f"},{url:"categories/index.html",revision:"1279f3f8822d96e612a967684156b0e2"},{url:"categories/生活趣闻/index.html",revision:"eda26c3d9d828ca80b736a2ac7c8cd29"},{url:"categories/随想/index.html",revision:"745eec06ceb3c75183c0bb2cbad16840"},{url:"css/index.css",revision:"01a345c41c3988d594c62e239a061a39"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"galleryGroup/index.html",revision:"ab0c1bf7fda2ffb714e4533699ded150"},{url:"galleryGroup/picture/20210720125345.jpg",revision:"22ee47952490de081ab2516d263db52c"},{url:"img/1441607617878500.gif",revision:"a738d63ec9f09ca087d5b7b3fb6dce8a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/background.jpg",revision:"c12bda2af1bd7cfd22a1e261b3eb13b0"},{url:"img/friend_404.gif",revision:"232c10434108c414914474d6d2c9d78c"},{url:"index.html",revision:"107a0db98875377276e46d60cb324a41"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"00c0c80fadeb51225c29b898a4fe0f57"},{url:"tags/index.html",revision:"fbbb71a3e916d581cd946fdaf2e239d6"},{url:"tags/文字/index.html",revision:"8689b2d15f68f48ab6221a25b91922a9"},{url:"tags/测试/index.html",revision:"23ae50db332255ac8e7314e6389dd625"},{url:"tags/生活/index.html",revision:"baf5b8178644bc7cee160a2af335637b"},{url:"tags/随笔/index.html",revision:"2746db8186ba5b928d4a84e215b906e2"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
