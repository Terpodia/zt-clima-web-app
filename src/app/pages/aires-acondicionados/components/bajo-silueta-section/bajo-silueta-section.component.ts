import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bajo-silueta-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bajo-silueta-section.component.html',
  styleUrl: './bajo-silueta-section.component.scss',
})
export class BajoSiluetaSectionComponent {
  @Input() smoothScroll!: (id: string) => void;
  @Input() openFaq!: Record<string, boolean>;
  @Input() toggleFaq!: (section: string, index: number) => void;

  bajoSiluetaFaqs = [
    {
      q: '¿Altura mínima?',
      a: 'Se valida en visita; requiere perfil bajo real.',
    },
    {
      q: '¿Rejillas lineales?',
      a: 'Sí, si la pérdida de carga lo permite.',
    },
    {
      q: '¿Acceso a filtros?',
      a: 'Generalmente frontal/superior.',
    },
    {
      q: '¿Zonificación?',
      a: 'Posible con compuertas y control adecuados.',
    },
  ];
}
