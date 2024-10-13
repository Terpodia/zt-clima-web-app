import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  faChevronLeft = faChevronCircleLeft;
  faChevronRight = faChevronCircleRight;
  currentIndex: number = 0;

  @Input() galleryImages!: string[];

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
