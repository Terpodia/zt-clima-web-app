
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/aire/aire.component.ts": [
    "chunk-S2WN5PTO.js",
    "chunk-5TYX4SRX.js"
  ],
  "src/app/pages/calefaccion/calefaccion.component.ts": [
    "chunk-J3UCAGNG.js",
    "chunk-5TYX4SRX.js"
  ],
  "src/app/pages/nosotros/nosotros.component.ts": [
    "chunk-3VGGR5IO.js",
    "chunk-5TYX4SRX.js"
  ],
  "src/app/pages/message-send/message-send.component.ts": [
    "chunk-2CWKPQA6.js"
  ],
  "src/app/pages/not-found/not-found.component.ts": [
    "chunk-2WUKWM6J.js"
  ]
},
  assets: {
    'index.csr.html': {size: 5039, hash: '08c1665f0849d3dea8425964e1a3d780818f6d4de001b8b2100e44ed9ae3102e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4076, hash: 'a9450f2923d31ff54d6b74e27a9a157785729ffd2fe68a78f2ed26e48d01d0bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-H7P4ARY2.css': {size: 2540, hash: 'v3Nv0w20nCg', text: () => import('./assets-chunks/styles-H7P4ARY2_css.mjs').then(m => m.default)}
  },
};
