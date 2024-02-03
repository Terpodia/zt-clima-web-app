import { Component } from '@angular/core';
import { GalleryComponent } from '../../gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
