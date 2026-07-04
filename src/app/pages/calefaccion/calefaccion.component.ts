import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface CalefaccionItem {
  title: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-calefaccion',
  standalone: true,
  imports: [PageHeroComponent, ContactSectionComponent, RevealDirective],
  templateUrl: './calefaccion.component.html',
  styleUrl: './calefaccion.component.scss',
})
export class CalefaccionComponent {
  readonly items: CalefaccionItem[] = [
    {
      title: 'Calderas',
      text: 'Ofrecemos calderas convencionales y de condensación de las mejores marcas y calidad del mercado.',
      image: 'assets/images/nuevo/calefaccion/calderas.webp',
    },
    {
      title: 'Radiadores',
      text: 'Son fabricados 100% en aluminio inyectado lo que los transforma en los de mejor calidad y rendimiento del mercado.',
      image: 'assets/images/nuevo/calefaccion/radiadores.webp',
    },
    {
      title: 'Piso radiante',
      text: 'Cañería y colectores marca Giacomini, empresa italiana líder mundial en la fabricación de estos insumos.',
      image: 'assets/images/nuevo/calefaccion/hero-calefaccion.webp',
    },
  ];

  readonly gallery = [
    {
      src: 'assets/images/nuevo/calefaccion/galeria-caldera.webp',
      alt: 'Caldera mural instalada',
    },
    {
      src: 'assets/images/nuevo/calefaccion/galeria-relieve.webp',
      alt: 'Detalle de cañerías de piso radiante en pared',
    },
    {
      src: 'assets/images/nuevo/calefaccion/galeria-radiador.webp',
      alt: 'Radiador de aluminio',
    },
    {
      src: 'assets/images/nuevo/calefaccion/galeria-valvula.webp',
      alt: 'Válvula de conexión de radiador',
    },
    {
      src: 'assets/images/nuevo/calefaccion/galeria-piso-radiante.webp',
      alt: 'Instalación de piso radiante',
    },
    {
      src: 'assets/images/nuevo/calefaccion/galeria-colector.webp',
      alt: 'Colector de piso radiante',
    },
  ];

  constructor(meta: Meta) {
    meta.updateTag({
      name: 'description',
      content:
        'Calefacción y agua caliente sanitaria: calderas convencionales y de condensación, radiadores de aluminio y piso radiante Giacomini. Instalación en Buenos Aires.',
    });
  }
}
