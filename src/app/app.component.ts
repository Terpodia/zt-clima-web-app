import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const WHATSAPP_API =
  'https://api.whatsapp.com/send/?type=phone_number&app_absent=0';
const phone = '5491161818130';
const msg = 'Hola ZT Clima, necesito asesoramiento.';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zt-clima-web-app';
  whatsappUrl = WHATSAPP_API + `&phone=${phone}&text=${msg}`;
}
