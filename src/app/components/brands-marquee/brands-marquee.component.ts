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
    { name: 'Giacomini', logo: 'assets/images/nuevo/brands/giacomini.png' },
    { name: 'Ariston', logo: 'assets/images/nuevo/brands/ariston.png' },
    { name: 'Midea', logo: 'assets/images/nuevo/brands/midea.png' },
    { name: 'Samsung', logo: 'assets/images/nuevo/brands/samsung.png' },
    { name: 'Daikin', logo: 'assets/images/nuevo/brands/daikin.png' },
    { name: 'Baxi', logo: 'assets/images/nuevo/brands/baxi.png' },
    { name: 'LG', logo: 'assets/images/nuevo/brands/lg.png' },
    { name: 'Ferroli', logo: 'assets/images/nuevo/brands/ferroli.png' },
  ];
}
