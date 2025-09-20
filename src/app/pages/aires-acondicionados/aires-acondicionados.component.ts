import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { BrandSectionComponent } from './components/brand-section/brand-section.component';
import { ClusterSectionComponent } from './components/cluster-section/cluster-section.component';
import { VrfSectionComponent } from './components/vrf-section/vrf-section.component';
import { CentralSectionComponent } from './components/central-section/central-section.component';
import { BajoSiluetaSectionComponent } from './components/bajo-silueta-section/bajo-silueta-section.component';
import { QuickGuideSectionComponent } from './components/quick-guide-section/quick-guide-section.component';
import { ProcessSectionComponent } from './components/process-section/process-section.component';
import { GuaranteesSectionComponent } from './components/guarantees-section/guarantees-section.component';
import { CoverageSectionComponent } from './components/coverage-section/coverage-section.component';
import { FormSectionComponent } from './components/form-section/form-section.component';

@Component({
  selector: 'app-aires-acondicionados',
  standalone: true,
  imports: [
    HeroSectionComponent,
    BrandSectionComponent,
    ClusterSectionComponent,
    VrfSectionComponent,
    CentralSectionComponent,
    BajoSiluetaSectionComponent,
    QuickGuideSectionComponent,
    ProcessSectionComponent,
    GuaranteesSectionComponent,
    CoverageSectionComponent,
    FormSectionComponent,
  ],
  templateUrl: './aires-acondicionados.component.html',
  styleUrls: ['./aires-acondicionados.component.scss'],
})
export class AiresAcondicionadosComponent {
  openFaq: Record<string, boolean> = {};

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Aires acondicionados | ZT Clima');
    this.meta.updateTag({
      name: 'description',
      content:
        'Sistemas de aire acondicionado de alto rendimiento: VRF/VRV, aire central por conductos y bajo silueta. Proyecto, instalación y soporte profesional.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'aires acondicionados, VRF, VRV, aire central por conductos, slim duct, climatización, instalación',
    });
  }

  smoothScroll(targetId: string) {
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleFaq(section: string, index: number) {
    const key = `${section}-${index}`;
    this.openFaq[key] = !this.openFaq[key];
  }
}
