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

interface StatMetric {
  value: number;
  suffix: string;
  labelKey: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection', { static: true }) private statsSection?: ElementRef<HTMLElement>;

  private readonly started = signal(false);
  private readonly values = signal([0, 0, 0, 0]);
  private observer: IntersectionObserver | null = null;
  private rafId: number | null = null;

  protected readonly stats: StatMetric[] = [
    { value: 50, suffix: '+', labelKey: 'stats.labels.clients' },
    { value: 3, suffix: 'x', labelKey: 'stats.labels.roi' },
    { value: 8, suffix: '+', labelKey: 'stats.labels.experience' },
    { value: 200, suffix: '+', labelKey: 'stats.labels.projects' },
  ];

  protected displayNumber(index: number): string {
    return `${this.values()[index]}${this.stats[index]?.suffix ?? ''}`;
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.values.set(this.stats.map((item) => item.value));
      this.started.set(true);
      return;
    }

    const section = this.statsSection?.nativeElement;
    if (!section) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (visible && !this.started()) {
          this.started.set(true);
          this.startCounterAnimation();
          this.observer?.disconnect();
          this.observer = null;
        }
      },
      { threshold: 0.35 },
    );

    this.observer.observe(section);
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
    const targets = this.stats.map((item) => item.value);
    const duration = 1400;
    const startTime = performance.now();

    const tick = (time: number): void => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValues = targets.map((target) => Math.round(target * eased));
      this.values.set(nextValues);

      if (progress < 1) {
        this.rafId = requestAnimationFrame(tick);
      } else {
        this.rafId = null;
      }
    };

    this.rafId = requestAnimationFrame(tick);
  }
}