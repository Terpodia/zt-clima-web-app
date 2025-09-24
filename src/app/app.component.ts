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
    this.showWhatsappDialog = true;
    this.sendGTMEvent();
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
