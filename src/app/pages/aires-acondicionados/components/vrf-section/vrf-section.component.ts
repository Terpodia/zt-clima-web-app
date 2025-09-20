import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vrf-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vrf-section.component.html',
  styleUrl: './vrf-section.component.scss',
})
export class VrfSectionComponent {
  @Input() smoothScroll!: (id: string) => void;
  @Input() openFaq!: Record<string, boolean>;
  @Input() toggleFaq!: (section: string, index: number) => void;

  vrfFaqs = [
    {
      q: '¿VRF o multisplit avanzado?',
      a: 'VRF ofrece mejor modulación, más zonas y eficiencia global.',
    },
    {
      q: '¿Se puede ampliar por etapas?',
      a: 'Sí, planificado desde el diseño.',
    },
    {
      q: '¿Qué mantenimiento lleva?',
      a: 'Chequeos y limpieza según uso y normativa.',
    },
    {
      q: '¿Tiempos de obra?',
      a: 'Dependen de metraje y accesos; se definen tras el relevamiento.',
    },
  ];
}
