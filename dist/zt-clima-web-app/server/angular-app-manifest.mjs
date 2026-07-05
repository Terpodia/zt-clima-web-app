
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/aire/aire.component.ts": [
    "chunk-ISESPPVB.js",
    "chunk-GTLCYPTZ.js"
  ],
  "src/app/pages/calefaccion/calefaccion.component.ts": [
    "chunk-5T7EQ5CS.js",
    "chunk-GTLCYPTZ.js"
  ],
  "src/app/pages/nosotros/nosotros.component.ts": [
    "chunk-LG5MFTQY.js",
    "chunk-GTLCYPTZ.js"
  ],
  "src/app/pages/message-send/message-send.component.ts": [
    "chunk-XLSUR7FC.js"
  ],
  "src/app/pages/not-found/not-found.component.ts": [
    "chunk-MGRRTM5V.js"
  ]
},
  assets: {
    'index.csr.html': {size: 5039, hash: '60d6a836a25c6e05f92ecda153965b782ef71dd9513820132e031b19f6d37335', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4076, hash: '57fbe134922d33de7a7bf4c6b1b525314cf59e108ef1604f87b3f6fee1b4472e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GH7BIH4B.css': {size: 2540, hash: 'l1hWNBDwoeU', text: () => import('./assets-chunks/styles-GH7BIH4B_css.mjs').then(m => m.default)}
  },
};
