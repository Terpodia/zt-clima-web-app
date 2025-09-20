import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-central-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './central-section.component.html',
  styleUrl: './central-section.component.scss',
})
export class CentralSectionComponent {
  @Input() smoothScroll!: (id: string) => void;
  @Input() openFaq!: Record<string, boolean>;
  @Input() toggleFaq!: (section: string, index: number) => void;

  centralFaqs = [
    {
      q: '¿Puedo zonificar por ambientes?',
      a: 'Sí, según proyecto.',
    },
    {
      q: '¿Qué mantenimiento requiere?',
      a: 'Limpieza de filtros y chequeos periódicos.',
    },
    {
      q: '¿Qué ruido voy a tener?',
      a: 'Muy bajo con buen diseño y aislación.',
    },
    {
      q: '¿Plazos?',
      a: 'Se estiman tras el relevamiento; obra planificada y limpia.',
    },
  ];
}
