import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AireComponent } from './pages/aire/aire.component';
import { CalefaccionComponent } from './pages/calefaccion/calefaccion.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MessageSendComponent } from './pages/message-send/message-send.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ZT Clima | Calefacción y Aire Acondicionado',
  },
  {
    path: 'aire',
    component: AireComponent,
    title: 'Aire Acondicionado | ZT Clima',
  },
  {
    path: 'calefaccion',
    component: CalefaccionComponent,
    title: 'Calefacción | ZT Clima',
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    title: 'Nosotros | ZT Clima',
  },
  {
    path: 'mensaje-enviado',
    component: MessageSendComponent,
    title: 'Mensaje enviado | ZT Clima',
  },
  { path: '**', redirectTo: '' },
];
