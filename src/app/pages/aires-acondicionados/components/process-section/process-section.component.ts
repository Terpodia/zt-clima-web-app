import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.scss',
})
export class ProcessSectionComponent {
  @Input() smoothScroll!: (id: string) => void;

  processSteps = [
    {
      number: 1,
      title: 'Visita y estudio',
      description: 'Medimos, relevamos y calculamos cargas térmicas.',
    },
    {
      number: 2,
      title: 'Proyecto y planificación',
      description: 'Elegimos equipos, diseñamos red y definimos plazos.',
    },
    {
      number: 3,
      title: 'Instalación y puesta en marcha',
      description: 'Montaje prolijo, pruebas, ajustes y documentación.',
    },
  ];
}
