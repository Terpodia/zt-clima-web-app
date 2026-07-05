import { Component } from '@angular/core';

interface Brand {
  name: string;
  logo: string;
  /** Ancho a 56px de alto (los archivos están a 112px = 2x). */
  width: number;
}

@Component({
    selector: 'app-brands-marquee',
    imports: [],
    templateUrl: './brands-marquee.component.html',
    styleUrl: './brands-marquee.component.scss'
})
export class BrandsMarqueeComponent {
  readonly brands: Brand[] = [
    { name: 'Giacomini', logo: 'assets/images/nuevo/brands/giacomini.webp', width: 280 },
    { name: 'Ariston', logo: 'assets/images/nuevo/brands/ariston.webp', width: 100 },
    { name: 'Midea', logo: 'assets/images/nuevo/brands/midea.webp', width: 146 },
    { name: 'Samsung', logo: 'assets/images/nuevo/brands/samsung.webp', width: 211 },
    { name: 'Daikin', logo: 'assets/images/nuevo/brands/daikin.webp', width: 260 },
    { name: 'Baxi', logo: 'assets/images/nuevo/brands/baxi.webp', width: 168 },
    { name: 'LG', logo: 'assets/images/nuevo/brands/lg.webp', width: 122 },
    { name: 'Ferroli', logo: 'assets/images/nuevo/brands/ferroli.webp', width: 113 },
  ];
}
