import { Component } from '@angular/core';

interface Brand {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-brands-marquee',
  standalone: true,
  imports: [],
  templateUrl: './brands-marquee.component.html',
  styleUrl: './brands-marquee.component.scss',
})
export class BrandsMarqueeComponent {
  readonly brands: Brand[] = [
    { name: 'Giacomini', logo: 'assets/images/nuevo/brands/giacomini.webp' },
    { name: 'Ariston', logo: 'assets/images/nuevo/brands/ariston.webp' },
    { name: 'Midea', logo: 'assets/images/nuevo/brands/midea.webp' },
    { name: 'Samsung', logo: 'assets/images/nuevo/brands/samsung.webp' },
    { name: 'Daikin', logo: 'assets/images/nuevo/brands/daikin.webp' },
    { name: 'Baxi', logo: 'assets/images/nuevo/brands/baxi.webp' },
    { name: 'LG', logo: 'assets/images/nuevo/brands/lg.webp' },
    { name: 'Ferroli', logo: 'assets/images/nuevo/brands/ferroli.webp' },
  ];
}
