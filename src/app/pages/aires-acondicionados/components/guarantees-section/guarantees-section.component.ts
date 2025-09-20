import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guarantees-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guarantees-section.component.html',
  styleUrl: './guarantees-section.component.scss',
})
export class GuaranteesSectionComponent {
  guarantees = [
    {
      title: 'Garantía por escrito',
      description: 'En instalación y mano de obra.',
    },
    {
      title: 'Marcas probadas',
      description: 'Marcas y componentes probados.',
    },
    {
      title: 'Cumplimiento normativo',
      description: 'Cumplimiento normativo y documentación al día.',
    },
    {
      title: 'Seguro de responsabilidad',
      description: 'Seguro de responsabilidad civil y protocolos de seguridad.',
    },
    {
      title: 'Equipo propio',
      description: 'Equipo propio y control de calidad interno.',
    },
  ];
}
