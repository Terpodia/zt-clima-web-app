import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandsMarqueeComponent } from '../../components/brands-marquee/brands-marquee.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface ProcessStep {
  title: string;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    BrandsMarqueeComponent,
    ContactSectionComponent,
    RevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly steps: ProcessStep[] = [
    {
      title: 'Escuchamos tu necesidad',
      text: 'Comenzamos cada proyecto con una charla personalizada para entender tu espacio, tus expectativas y lo que realmente necesitás.',
    },
    {
      title: 'Diseñamos la mejor solución',
      text: 'Te asesoramos y elaboramos una propuesta técnica y económica clara, explicando cada detalle y beneficio del sistema.',
    },
    {
      title: 'Presentamos el proyecto',
      text: 'Una vez aprobada la propuesta, te mostramos los planos e ingeniería del sistema para que tengas total tranquilidad y conformidad.',
    },
    {
      title: 'Hacemos realidad tu instalación',
      text: 'Llevamos adelante la obra con supervisión constante, cuidando cada detalle para garantizar calidad y cumplimiento en los plazos.',
    },
    {
      title: 'Acompañamos después de la instalación',
      text: 'Realizamos la puesta en marcha, te explicamos el funcionamiento del sistema y seguimos a tu lado para cualquier consulta o necesidad postventa.',
    },
  ];
}
