import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MessageSendComponent } from './pages/message-send/message-send.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mensaje-enviado', component: MessageSendComponent },
];
