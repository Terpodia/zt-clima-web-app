import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../shared/seo';

@Component({
  selector: 'app-message-send',
  standalone: true,
  templateUrl: './message-send.component.html',
  styleUrl: './message-send.component.scss',
})
export class MessageSendComponent {
  constructor(
    private readonly router: Router,
    seo: SeoService
  ) {
    seo.set({
      title: 'Mensaje enviado | ZT Clima',
      description: 'Tu mensaje fue enviado. En breve nos contactaremos.',
      path: '/mensaje-enviado',
      noindex: true,
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
