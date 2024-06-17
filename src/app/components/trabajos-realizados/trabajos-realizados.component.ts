import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-trabajos-realizados',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './trabajos-realizados.component.html',
  styleUrl: './trabajos-realizados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrabajosRealizadosComponent {
  obrasRealizadasGallery = [
    'assets/images/obras/1.jpg',
    'assets/images/obras/2.jpg',
    'assets/images/obras/3.jpg',
    'assets/images/obras/4.jpg',
    'assets/images/obras/5.jpg',
    'assets/images/obras/6.jpg',
  ];
}
