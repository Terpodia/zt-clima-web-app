import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// Solo la home va en el bundle inicial; el resto se carga bajo demanda
// (igual se prerenderizan todas: el prerender resuelve los loadComponent).
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ZT Clima | Calefacción y Aire Acondicionado',
  },
  {
    path: 'aire',
    loadComponent: () =>
      import('./pages/aire/aire.component').then((m) => m.AireComponent),
    title: 'Aire Acondicionado | ZT Clima',
  },
  {
    path: 'calefaccion',
    loadComponent: () =>
      import('./pages/calefaccion/calefaccion.component').then(
        (m) => m.CalefaccionComponent
      ),
    title: 'Calefacción | ZT Clima',
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros.component').then(
        (m) => m.NosotrosComponent
      ),
    title: 'Nosotros | ZT Clima',
  },
  {
    path: 'mensaje-enviado',
    loadComponent: () =>
      import('./pages/message-send/message-send.component').then(
        (m) => m.MessageSendComponent
      ),
    title: 'Mensaje enviado | ZT Clima',
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: 'Página no encontrada | ZT Clima',
  },
  { path: '**', redirectTo: '404' },
];
