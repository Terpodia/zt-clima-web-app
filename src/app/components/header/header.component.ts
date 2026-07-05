import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly menuOpen = signal(false);

  constructor(
    private readonly router: Router,
    private readonly scroller: ViewportScroller
  ) {}

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  scrollToContact() {
    this.closeMenu();
    // El id "contactanos" existe en la sección de contacto de cada página.
    this.scroller.scrollToAnchor('contactanos');
  }
}
