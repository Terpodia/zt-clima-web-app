import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cluster-section',
  standalone: true,
  imports: [],
  templateUrl: './cluster-section.component.html',
  styleUrl: './cluster-section.component.scss',
})
export class ClusterSectionComponent {
  @Input() smoothScroll!: (targetId: string) => void;
}
