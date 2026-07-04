import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  @Input({ required: true }) image = '';
  @Input() title = '';
  @Input() subtitle = '';
  /** Opacidad del velo blanco sobre la imagen (0 a 1). */
  @Input() overlay = 0.65;
}
