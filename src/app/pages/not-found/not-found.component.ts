import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/seo';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  constructor(seo: SeoService) {
    seo.set({
      title: 'Página no encontrada | ZT Clima',
      description: 'La página que buscás no existe.',
      path: '/404',
      noindex: true,
    });
  }
}
