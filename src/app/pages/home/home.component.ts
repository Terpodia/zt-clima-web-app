import { Component } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { TrabajosRealizadosComponent } from '../../components/trabajos-realizados/trabajos-realizados.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GalleryComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    ProductsComponent,
    ContactComponent,
    TrabajosRealizadosComponent,
    ContactFormComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mainGallery = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg',
    'assets/images/8.jpg',
  ];
}
