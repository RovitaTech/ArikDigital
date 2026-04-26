import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface AboutPoint {
  titleKey: string;
  detailKey: string;
  icon: 'trending' | 'zap' | 'target' | 'bars';
}

interface AboutStat {
  labelKey: string;
  finalValue: number;
  suffix: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection', { static: true }) private aboutSection?: ElementRef<HTMLElement>;

  protected readonly isAnimated = signal(false);
  protected readonly activeFeature = signal(0);
  protected readonly statValues = signal([0, 0, 0]);

  private observer: IntersectionObserver | null = null;
  private rafId: number | null = null;

  protected readonly stats: AboutStat[] = [
    { finalValue: 50, suffix: '+', labelKey: 'about.stats.projects' },
    { finalValue: 14, suffix: ' Tage', labelKey: 'about.stats.delivery' },
    { finalValue: 3, suffix: 'x', labelKey: 'about.stats.roi' },
  ];

  protected readonly points: AboutPoint[] = [
    { titleKey: 'about.points.p1.title', detailKey: 'about.points.p1.detail', icon: 'trending' },
    { titleKey: 'about.points.p2.title', detailKey: 'about.points.p2.detail', icon: 'zap' },
    { titleKey: 'about.points.p3.title', detailKey: 'about.points.p3.detail', icon: 'target' },
    { titleKey: 'about.points.p4.title', detailKey: 'about.points.p4.detail', icon: 'bars' },
  ];

  protected setActiveFeature(index: number): void {
    this.activeFeature.set(index);
  }

  protected isFeatureActive(index: number): boolean {
    return this.activeFeature() === index;
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
}
