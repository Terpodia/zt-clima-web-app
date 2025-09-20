import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quick-guide-section',
  standalone: true,
  imports: [],
  templateUrl: './quick-guide-section.component.html',
  styleUrl: './quick-guide-section.component.scss',
})
export class QuickGuideSectionComponent {
  @Input() smoothScroll!: (id: string) => void;
}
