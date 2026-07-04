import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface AireSystem {
  title: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-aire',
  standalone: true,
  imports: [PageHeroComponent, ContactSectionComponent, RevealDirective],
  templateUrl: './aire.component.html',
  styleUrl: './aire.component.scss',
})
export class AireComponent {
  readonly systems: AireSystem[] = [
    {
      title: 'VRV/VRF',
      text: 'Es el sistema de climatización más moderno y flexible de la actualidad. Tiene un sistema de control de consumo de energía de última generación, permite instalar unidades interiores de distintas características y adaptar la capacidad de sus unidades exteriores a cualquier proyecto.',
      image: 'assets/images/nuevo/aire/vrf.jpg',
    },
    {
      title: 'Cassette',
      text: 'Son sistemas 1 a 1, su principal característica es que la unidad interior (que puede ser cuadrada o redonda) se ubique en cualquier lugar del cielorraso y permite distribuir el aire en 1, 2 o 4 vías en el caso de los cuadrados o a 360° en el caso de los redondos.',
      image: 'assets/images/nuevo/aire/cassette.jpg',
    },
    {
      title: 'Multisplit',
      text: 'Es un sistema pensado para instalar con una unidad exterior hasta 5 unidades interiores. Sus limitaciones son la capacidad de sus unidades exteriores (según la marca hasta 14 kW) y las distancias permitidas de cañería entre unidades exteriores e interiores.',
      image: 'assets/images/nuevo/aire/multisplit.jpg',
    },
    {
      title: 'Piso techo',
      text: 'Son sistemas 1 a 1, su principal característica es que la unidad interior puede ser instalada a nivel de piso e inyectar el aire hacia arriba en diagonal para envolver el ambiente, o bien instalarse en cualquier parte del techo e inyectar el aire hacia abajo.',
      image: 'assets/images/nuevo/aire/piso-techo.jpg',
    },
    {
      title: 'Bajo Silueta',
      text: 'Son sistemas 1 a 1, diseñados para que la unidad interior se instale entre el cielorraso y la losa y desde ahí distribuir el aire a través de conductos.',
      image: 'assets/images/nuevo/aire/bajo-silueta.jpg',
    },
    {
      title: 'Roof-top',
      text: 'Es un sistema central pensado en general para grandes espacios.',
      image: 'assets/images/nuevo/aire/roof-top.jpg',
    },
  ];

  constructor(meta: Meta) {
    meta.updateTag({
      name: 'description',
      content:
        'Sistemas de aire acondicionado de alta performance: VRF/VRV, cassette, multisplit, piso techo, bajo silueta y roof-top. Diseño e instalación en Buenos Aires.',
    });
  }
}
