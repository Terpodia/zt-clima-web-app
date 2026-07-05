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

  /** srcset por convención: <base>-828.webp, <base>-1280.webp y la original 1920w. */
  get srcset(): string {
    const base = this.image.replace(/\.webp$/, '');
    return `${base}-828.webp 828w, ${base}-1280.webp 1280w, ${this.image} 1920w`;
  }
}
