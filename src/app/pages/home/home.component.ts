import { Component } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ContactComponent } from '../../components/contact/contact.component';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
