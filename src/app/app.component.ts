import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { waUrl } from './shared/site-data';
import { pushGtmEvent } from './shared/gtm';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly whatsappUrl = waUrl();

  onWhatsappClick() {
    pushGtmEvent({ event: 'ChatJoin' });
    pushGtmEvent({ event: 'WhatsAppOptionSelected', option: 'Calefacción' });
  }
}
