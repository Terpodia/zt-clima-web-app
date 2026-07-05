import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SeoService } from '../../shared/seo';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { BrandsMarqueeComponent } from '../../components/brands-marquee/brands-marquee.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { SITE } from '../../shared/site-data';

interface ValueCard {
  title: string;
  text: string;
}

@Component({
    selector: 'app-nosotros',
    imports: [
        PageHeroComponent,
        BrandsMarqueeComponent,
        ContactSectionComponent,
        RevealDirective,
    ],
    templateUrl: './nosotros.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  readonly site = SITE;

  readonly values: ValueCard[] = [
    {
      title: 'Confianza y compromiso',
      text: 'Nos involucramos en cada proyecto desde el primer contacto hasta la postventa, garantizando un servicio transparente, responsable y orientado a resultados duraderos.',
    },
    {
      title: 'Experiencia profesional',
      text: 'Contamos con un equipo especializado en climatización con amplia trayectoria en proyectos residenciales, comerciales e industriales, asegurando calidad técnica y precisión en cada instalación.',
    },
    {
      title: 'Soluciones a medida',
      text: 'Diseñamos sistemas de calefacción y aire acondicionado adaptados a las necesidades de cada cliente, priorizando confort, eficiencia y estética.',
    },
    {
      title: 'Tec. y calidad garantizada',
      text: 'Trabajamos con equipamiento de última generación y materiales de alta durabilidad, respaldados por marcas líderes en el mercado.',
    },
  ];

  readonly testimonials = [
    'Recibimos asesoramiento en todo momento y modificamos parte del proyecto gracias a las ideas que aportaron. ¡Muy recomendables!',
    'Me atendieron personalmente desde el inicio hasta el final de la obra. Excelente servicio.',
    'El sistema funciona perfecto en todos los ambientes, tal cual se comprometieron.',
    'Surgió un inconveniente una vez que ya nos habíamos mudado y nos brindaron una respuesta inmediata. ¡Excelente post-venta!',
  ];

  constructor(seo: SeoService) {
    seo.set({
      title: 'Nosotros | ZT Clima',
      description:
        'Conocé a ZT Clima: un equipo especializado en climatización con amplia trayectoria en proyectos residenciales, comerciales e industriales en Buenos Aires.',
      path: '/nosotros/',
    });
  }
}
