# ZT Clima - Web App

Aplicación web construida con Angular 18 utilizando componentes standalone, enrutamiento con `provideRouter`, e integración de SSR (server-side rendering) con `@angular/ssr` y un servidor Express (`server.ts`). Incluye integración con Google Tag Manager (GTM) y despliegue a GitHub Pages mediante la carpeta `docs/`.

## Tecnologías y características

- **Angular 18** con componentes standalone.
- **Router standalone**: definición de rutas en `src/app/app.routes.ts` y provisión vía `provideRouter` en `src/app/app.config.ts`.
- **SSR con Express**: `server.ts` y `src/main.server.ts` para renderizado en servidor.
- **Hydration** en cliente: `provideClientHydration()` en `app.config.ts`.
- **Google Tag Manager**: provider `googleTagManagerId` y scripts en `src/index.html`.
- **FontAwesome** y **EmailJS** configurados como dependencias.

## Estructura del proyecto

```
zt-clima-web-app/
├─ src/
│  ├─ app/
│  │  ├─ app.component.ts        # Shell raíz (standalone) con <router-outlet/>
│  │  ├─ app.component.html       # Plantilla principal (header, footer, outlet)
│  │  ├─ app.config.ts            # provideRouter(routes), hydration y GTM provider
│  │  ├─ app.routes.ts            # Definición de rutas de la aplicación
│  │  ├─ components/              # Componentes de sección (header, footer, etc.)
│  │  └─ pages/                   # Páginas enrutable (home, mensaje-enviado)
│  ├─ index.html                  # Meta/SEO, base href, scripts GTM
│  ├─ main.ts                     # bootstrapApplication(AppComponent, appConfig)
│  └─ main.server.ts              # bootstrap de SSR
├─ server.ts                      # Servidor Express para SSR
├─ angular.json                   # Configuración del workspace Angular
├─ package.json                   # Scripts y dependencias
└─ docs/                          # Salida estática para GitHub Pages (post-build)
```

## Enrutamiento

Las rutas se definen en `src/app/app.routes.ts` usando la API de rutas standalone:

```ts
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MessageSendComponent } from './pages/message-send/message-send.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mensaje-enviado', component: MessageSendComponent },
];
```

Estas rutas se inyectan en la app mediante `provideRouter(routes)` en `src/app/app.config.ts`. El `AppComponent` incluye `<router-outlet>` para renderizar la página activa:

```html
<!-- src/app/app.component.html -->
<app-header></app-header>
<main class="content">
  <router-outlet></router-outlet>
  <!-- aquí se renderizan las páginas según la ruta -->
  <app-footer></app-footer>
</main>
```

## Cómo agregar nuevas rutas

1) **Crear la página** dentro de `src/app/pages/` como componente standalone.

```bash
ng generate component pages/servicios --standalone=false
```

Nota: El proyecto actual usa componentes standalone para `AppComponent`, y páginas existentes declaradas como componentes clásicos dentro de su archivo. Si deseas mantener standalone en las páginas nuevas, puedes generarlas standalone y referenciarlas directamente, o bien crear componentes clásicos y referenciarlos igual desde las rutas.

2) **Registrar la ruta** en `src/app/app.routes.ts`.

```ts
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mensaje-enviado', component: MessageSendComponent },
  { path: 'servicios', component: ServiciosComponent }, // nueva ruta
];
```

3) **(Opcional) Carga perezosa (lazy) por componente** usando `loadComponent` para reducir el bundle inicial:

```ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mensaje-enviado', component: MessageSendComponent },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent)
  },
];
```

4) **Navegación**: añade enlaces con `routerLink` (por ejemplo en `header`) o navega por código con `Router`.

```html
<a routerLink="/servicios">Servicios</a>
```

```ts
constructor(private router: Router) {}

goServicios() {
  this.router.navigate(['/servicios']);
}
```

## SSR (Server-Side Rendering)

- El servidor de SSR está en `server.ts` (Express + `CommonEngine`).
- Bootstrap SSR en `src/main.server.ts`.
- Script para servir el SSR compilado:

```bash
npm run serve:ssr:zt-clima-web-app
# Equivale a: node dist/zt-clima-web-app/server/server.mjs
```

Para producir la salida SSR, compila la app (producción) y luego ejecuta el script anterior. El servidor escucha por defecto en `http://localhost:4000`.

## Scripts de desarrollo y build

- `npm start` / `ng serve`: servidor de desarrollo SPA en `http://localhost:4200/`.
- `npm run build` / `ng build`: build de producción en `dist/`.
- `npm run deploy-github`: build con `--base-href /zt-clima-web-app/` y movimiento de `dist/.../browser` a `docs/` para GitHub Pages.
- `npm test` / `ng test`: pruebas unitarias con Karma.

## SEO y Google Tag Manager

- Metadatos y `base href` en `src/index.html`.
- Scripts de GTM en `src/index.html` y `googleTagManagerId` provisto en `src/app/app.config.ts`:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    { provide: 'googleTagManagerId', useValue: 'GTM-KVP4PQHH' }
  ]
};
```

## Estructura de componentes

- `src/app/components/`: bloques reutilizables (header, footer, gallery, contact-form, etc.).
- `src/app/pages/`: páginas enrutable (por ejemplo, `home`, `message-send`).

## Despliegue en GitHub Pages

1) Ejecuta `npm run deploy-github`.
2) Configura GitHub Pages para servir desde la rama `main` y carpeta `/docs`.
3) Verifica que los assets carguen con `baseHref` correcto (`/zt-clima-web-app/`).

---

Si necesitas añadir nuevas secciones, componentes o páginas, sigue la estructura anterior y registra tus rutas en `app.routes.ts`. Cualquier duda o mejora, bienvenido el PR.
