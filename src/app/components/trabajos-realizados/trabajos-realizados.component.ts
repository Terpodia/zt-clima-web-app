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
    'assets/images/obras/obras1.jpg',
    'assets/images/obras/obras2.jpg',
    'assets/images/obras/obras3.jpg',
    'assets/images/obras/obras4.jpg',
    'assets/images/obras/obras5.jpg',
    'assets/images/obras/obras6.jpg',
    'assets/images/obras/obras7.jpg',
  ];
}
