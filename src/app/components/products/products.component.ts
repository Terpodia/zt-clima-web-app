import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  images = [
    {
      src: 'assets/images/products/AristonLogo.png',
      title: 'Ariston Logo',
      description: 'Ariston Logo',
    },
    {
      src: 'assets/images/products/Baxi Logo.png',
      title: 'Baxi Logo',
      description: 'Baxi Logo',
    },
    {
      src: 'assets/images/products/Ferroli Logo.png',
      title: 'Ferroli Logo',
      description: 'Ferroli Logo',
    },
    {
      src: 'assets/images/products/Giacomini Logo.png',
      title: 'Giacomini Logo',
      description: 'Giacomini Logo',
    },
    {
      src: 'assets/images/products/Peisa Logo.png',
      title: 'Peisa Logo',
      description: 'Peisa Logo',
    },
    {
      src: 'assets/images/products/Rehau Logo.png',
      title: 'Rehau Logo',
      description: 'Rehau Logo',
    },
  ];
}
