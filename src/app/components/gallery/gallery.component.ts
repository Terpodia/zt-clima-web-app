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
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
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
