import { NgFor, isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
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
export class GalleryComponent implements OnInit, OnDestroy {
  faChevronLeft = faChevronCircleLeft;
  faChevronRight = faChevronCircleRight;
  currentIndex: number = 0;
  private autoplayInterval?: number;

  @Input() galleryImages!: string[];
  @Input() autoplay: boolean = false;
  @Input() autoplayDelay: number = 3000; // 3 seconds by default

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.autoplayInterval = window.setInterval(() => {
        this.next();
      }, this.autoplayDelay);
    }
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = undefined;
    }
  }

  prev(): void {
    this.currentIndex =
      (((this.currentIndex - 1) % this.galleryImages.length) +
        this.galleryImages.length) %
      this.galleryImages.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
  }

  // Pause autoplay on manual navigation
  onManualNavigation(): void {
    if (this.autoplay && isPlatformBrowser(this.platformId)) {
      this.stopAutoplay();
      // Restart autoplay after a brief pause
      setTimeout(() => {
        if (this.autoplay) {
          this.startAutoplay();
        }
      }, 1000);
    }
  }
}
