import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  input,
  signal,
} from '@angular/core';

interface AboutPoint {
  title: string;
  detail: string;
  icon: 'trending' | 'zap' | 'target' | 'bars';
}

interface AboutStat {
  label: string;
  finalValue: number;
  suffix: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection', { static: true }) private aboutSection?: ElementRef<HTMLElement>;

  readonly language = input<'en' | 'de'>('de');
  protected readonly isAnimated = signal(false);
  protected readonly activeFeature = signal(0);
  protected readonly statValues = signal([0, 0, 0]);

  private observer: IntersectionObserver | null = null;
  private rafId: number | null = null;

  protected setActiveFeature(index: number): void {
    this.activeFeature.set(index);
  }

  protected isFeatureActive(index: number): boolean {
    return this.activeFeature() === index;
  }

  protected get stats(): AboutStat[] {
    if (this.language() === 'en') {
      return [
        { finalValue: 50, suffix: '+', label: 'Projects completed' },
        { finalValue: 14, suffix: ' Tage', label: 'Average delivery time' },
        { finalValue: 3, suffix: 'x', label: 'Average ROI' },
      ];
    }

    return [
      { finalValue: 50, suffix: '+', label: 'Projekte abgeschlossen' },
      { finalValue: 14, suffix: ' Tage', label: 'Durchschnittliche Lieferzeit' },
      { finalValue: 3, suffix: 'x', label: 'Durchschnittlicher ROI' },
    ];
  }

  protected displayStat(index: number): string {
    const value = this.statValues()[index] ?? 0;
    const suffix = this.stats[index]?.suffix ?? '';
    return `${value}${suffix}`;
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isAnimated.set(true);
      this.statValues.set(this.stats.map((item) => item.finalValue));
      return;
    }

    const target = this.aboutSection?.nativeElement;
    if (!target) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (visible) {
          this.isAnimated.set(true);
          this.startCounterAnimation();
          this.observer?.disconnect();
          this.observer = null;
        }
      },
      { threshold: 0.2 },
    );

    this.observer.observe(target);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;

    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private startCounterAnimation(): void {
    const targets = this.stats.map((item) => item.finalValue);
    const durationMs = 1200;
    const startAt = performance.now();

    const tick = (timestamp: number): void => {
      const progress = Math.min((timestamp - startAt) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.statValues.set(targets.map((value) => Math.round(value * eased)));

      if (progress < 1) {
        this.rafId = requestAnimationFrame(tick);
      } else {
        this.rafId = null;
      }
    };

    this.rafId = requestAnimationFrame(tick);
  }

  protected get points(): AboutPoint[] {
    if (this.language() === 'en') {
      return [
        {
          title: 'Senior Growth Expertise',
          detail: 'Campaign and web specialists aligned to revenue, not vanity metrics.',
          icon: 'trending',
        },
        {
          title: 'Fast Execution Rhythm',
          detail: 'Clear milestones, weekly delivery cycles, and transparent communication.',
          icon: 'zap',
        },
        {
          title: 'Conversion-First Design',
          detail: 'Every page section is built to reduce friction and raise lead quality.',
          icon: 'target',
        },
        {
          title: 'Data-Led Optimization',
          detail: 'Continuous measurement and iteration to improve ROI after launch.',
          icon: 'bars',
        },
      ];
    }

    return [
      {
        title: 'Erfahrung im Wachstumsmarketing',
        detail: 'Spezialisten fuer Kampagnen und Websites mit Fokus auf echten Umsatz.',
        icon: 'trending',
      },
      {
        title: 'Schnelle Umsetzung',
        detail: 'Klare Meilensteine, woechentliche Releases und transparente Kommunikation.',
        icon: 'zap',
      },
      {
        title: 'Conversion-First Design',
        detail: 'Jeder Abschnitt wird fuer bessere Leads und hoehere Anfragen optimiert.',
        icon: 'target',
      },
      {
        title: 'Datengetriebene Optimierung',
        detail: 'Kontinuierliche Messung und Verbesserung fuer nachhaltigen ROI.',
        icon: 'bars',
      },
    ];
  }
}
