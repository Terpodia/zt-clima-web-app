import { Directive, ElementRef, Input, afterNextRender } from '@angular/core';

let sharedObserver: IntersectionObserver | null = null;
const pendingDelays = new WeakMap<Element, number>();

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${pendingDelays.get(el) ?? 0}ms`;
            el.classList.add('reveal--visible');
            sharedObserver!.unobserve(el);
          }
        }
      },
      // threshold 0 + rootMargin negativo: dispara apenas el elemento asoma,
      // incluso para elementos más altos que el viewport.
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );
  }
  return sharedObserver;
}

/**
 * Fade-in + slide-up al entrar al viewport, con delay opcional para stagger.
 * SSR-safe: el HTML prerenderizado no lleva la clase .reveal, así el
 * contenido es visible sin JavaScript.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective {
  @Input() revealDelay = 0;

  constructor(el: ElementRef<HTMLElement>) {
    afterNextRender(() => {
      const node = el.nativeElement;
      if (
        typeof IntersectionObserver === 'undefined' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }
      node.classList.add('reveal');
      pendingDelays.set(node, this.revealDelay);
      getObserver().observe(node);
    });
  }
}
