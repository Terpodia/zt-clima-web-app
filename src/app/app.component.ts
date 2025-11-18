import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappDialogComponent } from './components/whatsapp-dialog/whatsapp-dialog.component';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    WhatsappDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zt-clima-web-app';
  showWhatsappDialog = false;

  constructor(private readonly gtmService: GoogleTagManagerService) {}

  openWhatsappDialog() {
    // Temporal: abrir directamente WhatsApp de calefacción
    const WHATSAPP_API = 'https://api.whatsapp.com/send/?type=phone_number&app_absent=0';
    const phone = '541131601069'; // Calefacción
    const message = 'Hola ZT Clima, necesito asesoramiento.';
    const whatsappUrl = `${WHATSAPP_API}&phone=${phone}&text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Enviar eventos GTM
    this.sendGTMEvent();
    this.onWhatsappOptionSelected('Calefacción');
    
    // Código original comentado temporalmente:
    // this.showWhatsappDialog = true;
    // this.sendGTMEvent();
  }

  closeWhatsappDialog() {
    this.showWhatsappDialog = false;
  }

  onWhatsappOptionSelected(option: string) {
    const gtmTag = {
      event: 'WhatsAppOptionSelected',
      option: option,
    };
    this.gtmService.pushTag(gtmTag);
  }

  sendGTMEvent() {
    const gtmTag = {
      event: 'ChatJoin',
    };

    this.gtmService.pushTag(gtmTag);
  }
}
