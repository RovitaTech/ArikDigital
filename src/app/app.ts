import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CursorFollowerComponent } from './components/cursor-follower/cursor-follower.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProcessComponent } from './components/process/process.component';
import { ServicesComponent } from './components/services/services.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    ClientsComponent,
    AboutComponent,
    StatsComponent,
    ServicesComponent,
    ProcessComponent,
    CaseStudiesComponent,
    PricingComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    CursorFollowerComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  readonly showIntro = signal(true);
  readonly language = signal<'en' | 'de'>('de');
  private introTimerId: ReturnType<typeof setTimeout> | null = null;
  private revealObserver: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      this.showIntro.set(false);
      return;
    }

    const introDurationMs = 1850;
    this.introTimerId = window.setTimeout(() => {
      this.showIntro.set(false);
      this.introTimerId = null;
    }, introDurationMs);
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.revealAllSections();
      return;
    }

    window.requestAnimationFrame(() => {
      this.setupRevealObserver();
    });
  }

  ngOnDestroy(): void {
    if (this.introTimerId !== null) {
      clearTimeout(this.introTimerId);
      this.introTimerId = null;
    }

    this.revealObserver?.disconnect();
    this.revealObserver = null;
  }

  protected setLanguage(language: 'en' | 'de'): void {
    this.language.set(language);
  }

  private setupRevealObserver(): void {
    const sections = document.querySelectorAll<HTMLElement>('section:not(.hero-section)');

    if (!sections.length) {
      return;
    }

    sections.forEach((section) => {
      section.classList.add('reveal-section');
      const staggerItems = section.querySelectorAll<HTMLElement>(
        '[data-reveal-item], .service-card, .stat-card, .pricing-card, .process-step, .case-card, .testimonial-card, .footer-col',
      );

      staggerItems.forEach((item, index) => {
        item.style.setProperty('--stagger-delay', `${index * 100}ms`);
        item.classList.add('reveal-item');
      });
    });

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px',
      },
    );

    sections.forEach((section) => {
      this.revealObserver?.observe(section);
    });
  }

  private revealAllSections(): void {
    const sections = document.querySelectorAll<HTMLElement>('section');
    sections.forEach((section) => {
      section.classList.add('is-visible');
    });
  }
}