
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/aire/aire.component.ts": [
    {
      "path": "chunk-PBIV2274.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-BQ4NEYYR.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/calefaccion/calefaccion.component.ts": [
    {
      "path": "chunk-XEXQQ3SW.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-BQ4NEYYR.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/nosotros/nosotros.component.ts": [
    {
      "path": "chunk-7NH7IVPO.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-BQ4NEYYR.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/message-send/message-send.component.ts": [
    {
      "path": "chunk-GQV7OA2T.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/not-found/not-found.component.ts": [
    {
      "path": "chunk-4NQAP2IS.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 5039, hash: '9d6075e405d1d2dbae42540070a195b4c5a68d746b1edc2e4cbca8c4cf386d95', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4076, hash: 'e98470788538caab97aefc405a24cac0f91a1d4cbd8483ca7c8f229583f88333', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-H7P4ARY2.css': {size: 2540, hash: 'v3Nv0w20nCg', text: () => import('./assets-chunks/styles-H7P4ARY2_css.mjs').then(m => m.default)}
  },
};
