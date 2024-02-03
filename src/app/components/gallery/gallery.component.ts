import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  faChevronLeft = faChevronCircleLeft;
  faChevronRight = faChevronCircleRight;
  currentIndex: number = 0;

  galleryImages: string[] = [
    'https://cdn0.recetasgratis.net/es/posts/4/8/8/torta_humeda_de_chocolate_decorada_47884_orig.jpg',
    'https://chocolateras.com/wp-content/uploads/2020/10/INGREDIENTES-DEL-CHOCOLATE.jpg',
    'https://laopinionaustral.com.ar/media/uploads/2023/10/receta-de-brownie-casero.jpg',
  ];

  prev(): void {
    this.currentIndex =
      (((this.currentIndex - 1) % this.galleryImages.length) +
        this.galleryImages.length) %
      this.galleryImages.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
  }
}
