
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/aire/aire.component.ts": [
    {
      "path": "chunk-UXGBJWRV.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-2ROLMOIS.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/calefaccion/calefaccion.component.ts": [
    {
      "path": "chunk-FHUQJXGF.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-2ROLMOIS.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/nosotros/nosotros.component.ts": [
    {
      "path": "chunk-MOW2N7B7.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-2ROLMOIS.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/message-send/message-send.component.ts": [
    {
      "path": "chunk-2KEKTXYR.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/not-found/not-found.component.ts": [
    {
      "path": "chunk-3UJOSXOL.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 5039, hash: '4be9d74b538fbde5a1fed0c3cc1aaf368f00e3444c816ea1d2774d1536f1dca6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4076, hash: 'd81a404874d2f598f28b664e14f85f4551d538196ee64d81db95807c8ae82768', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-H7P4ARY2.css': {size: 2540, hash: 'v3Nv0w20nCg', text: () => import('./assets-chunks/styles-H7P4ARY2_css.mjs').then(m => m.default)}
  },
};
