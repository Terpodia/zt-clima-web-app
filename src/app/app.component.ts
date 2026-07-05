import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { waUrl } from './shared/site-data';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly whatsappUrl = waUrl();

  constructor(private readonly gtmService: GoogleTagManagerService) {}

  onWhatsappClick() {
    this.gtmService.pushTag({ event: 'ChatJoin' });
    this.gtmService.pushTag({
      event: 'WhatsAppOptionSelected',
      option: 'Calefacción',
    });
  }
}
