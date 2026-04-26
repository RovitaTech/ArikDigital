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

interface ProcessStep {
  number: string;
  titleKey: string;
  descriptionKey: string;
  icon: 'message' | 'clipboard' | 'code' | 'rocket';
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent implements AfterViewInit, OnDestroy {
  @ViewChild('processSection', { static: true }) private processSection?: ElementRef<HTMLElement>;

  protected readonly isAnimated = signal(false);
  protected readonly activeStep = signal(0);
  protected readonly steps: ProcessStep[] = [
    {
      number: '01',
      titleKey: 'process.steps.s1.title',
      descriptionKey: 'process.steps.s1.desc',
      icon: 'message',
    },
    {
      number: '02',
      titleKey: 'process.steps.s2.title',
      descriptionKey: 'process.steps.s2.desc',
      icon: 'clipboard',
    },
    {
      number: '03',
      titleKey: 'process.steps.s3.title',
      descriptionKey: 'process.steps.s3.desc',
      icon: 'code',
    },
    {
      number: '04',
      titleKey: 'process.steps.s4.title',
      descriptionKey: 'process.steps.s4.desc',
      icon: 'rocket',
    },
  ];

  private observer: IntersectionObserver | null = null;

  protected setActiveStep(index: number): void {
    this.activeStep.set(index);
  }

  protected isStepActive(index: number): boolean {
    return this.activeStep() === index;
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isAnimated.set(true);
      return;
    }

    const target = this.processSection?.nativeElement;
    if (!target) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const shouldAnimate = entries.some((entry) => entry.isIntersecting);
        if (shouldAnimate) {
          this.isAnimated.set(true);
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
  }
}