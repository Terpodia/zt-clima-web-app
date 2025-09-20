import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coverage-section',
  standalone: true,
  imports: [],
  templateUrl: './coverage-section.component.html',
  styleUrl: './coverage-section.component.scss',
})
export class CoverageSectionComponent {
  @Input() smoothScroll!: (id: string) => void;
}
