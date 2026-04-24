import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, input, signal } from '@angular/core';

interface Testimonial {
  quote: string;
  client: string;
  company: string;
  stars: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  readonly language = input<'en' | 'de'>('de');
  protected readonly activeIndex = signal(0);
  private autoTimer: ReturnType<typeof setInterval> | null = null;

  protected get testimonials(): Testimonial[] {
    if (this.language() === 'en') {
      return [
        {
          quote: 'Arik Digital transformed our website into a high-converting growth channel in under 8 weeks.',
          client: 'Lea Wagner',
          company: 'Nexa Commerce',
          stars: 5,
        },
        {
          quote: 'The team delivered strategy and execution with exceptional speed and clarity.',
          client: 'Martin Hoff',
          company: 'Voltica SaaS',
          stars: 5,
        },
        {
          quote: 'We saw better lead quality and lower acquisition costs within the first month after launch.',
          client: 'Ava Mendes',
          company: 'Northlane MedCare',
          stars: 5,
        },
      ];
    }

    return [
      {
        quote: 'Arik Digital hat unsere Website in weniger als 8 Wochen in einen starken Wachstumskanal verwandelt.',
        client: 'Lea Wagner',
        company: 'Nexa Commerce',
        stars: 5,
      },
      {
        quote: 'Das Team liefert Strategie und Umsetzung mit hoher Geschwindigkeit und Klarheit.',
        client: 'Martin Hoff',
        company: 'Voltica SaaS',
        stars: 5,
      },
      {
        quote: 'Bereits im ersten Monat nach dem Launch stieg die Lead-Qualitaet bei niedrigeren Akquisekosten.',
        client: 'Ava Mendes',
        company: 'Northlane MedCare',
        stars: 5,
      },
    ];
  }

  ngOnInit(): void {
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.autoTimer = setInterval(() => {
      this.next();
    }, 4300);
  }

  ngOnDestroy(): void {
    if (this.autoTimer !== null) {
      clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
  }

  protected setSlide(index: number): void {
    this.activeIndex.set(index);
  }

  protected next(): void {
    this.activeIndex.set((this.activeIndex() + 1) % this.testimonials.length);
  }

  protected prev(): void {
    this.activeIndex.set((this.activeIndex() - 1 + this.testimonials.length) % this.testimonials.length);
  }

  protected stars(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index);
  }
}
