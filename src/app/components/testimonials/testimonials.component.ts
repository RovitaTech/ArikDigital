import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Testimonial {
  quoteKey: string;
  client: string;
  company: string;
  stars: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  protected readonly activeIndex = signal(0);
  private autoTimer: ReturnType<typeof setInterval> | null = null;
  protected readonly testimonials: Testimonial[] = [
    {
      quoteKey: 'testimonials.quote0',
      client: 'Lea Wagner',
      company: 'Nexa Commerce',
      stars: 5,
    },
    {
      quoteKey: 'testimonials.quote1',
      client: 'Martin Hoff',
      company: 'Voltica SaaS',
      stars: 5,
    },
    {
      quoteKey: 'testimonials.quote2',
      client: 'Ava Mendes',
      company: 'Northlane MedCare',
      stars: 5,
    },
  ];

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
