import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { SITE } from '../../shared/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();

  constructor(private readonly scroller: ViewportScroller) {}

  scrollToContact() {
    this.scroller.scrollToAnchor('contactanos');
  }
}
