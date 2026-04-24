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

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: 'message' | 'clipboard' | 'code' | 'rocket';
}

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent implements AfterViewInit, OnDestroy {
  @ViewChild('processSection', { static: true }) private processSection?: ElementRef<HTMLElement>;

  readonly language = input<'en' | 'de'>('de');
  protected readonly isAnimated = signal(false);
  protected readonly activeStep = signal(0);

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

  protected get steps(): ProcessStep[] {
    if (this.language() === 'en') {
      return [
        {
          number: '01',
          title: 'Initial consultation',
          description: 'Our sales team will work with you to find the best solution and discuss the project scope.',
          icon: 'message',
        },
        {
          number: '02',
          title: 'Onboarding',
          description: 'You will get a clear overview of the process and all the information you need.',
          icon: 'clipboard',
        },
        {
          number: '03',
          title: 'Development',
          description: 'You can sit back and relax while our team develops your professional website.',
          icon: 'code',
        },
        {
          number: '04',
          title: 'Handover',
          description: 'In exactly 14 days you will receive your brand new website - ready to go live.',
          icon: 'rocket',
        },
      ];
    }

    return [
      {
        number: '01',
        title: 'Erstgespraech',
        description: 'Unser Sales-Team findet mit dir die beste Loesung und bespricht den Projektumfang.',
        icon: 'message',
      },
      {
        number: '02',
        title: 'Onboarding',
        description: 'Du bekommst einen klaren Ueberblick ueber den Ablauf und alle Informationen, die du brauchst.',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: 'Entwicklung',
        description: 'Du kannst dich zuruecklehnen, waehrend unser Team deine professionelle Website entwickelt.',
        icon: 'code',
      },
      {
        number: '04',
        title: 'Uebergabe',
        description: 'In genau 14 Tagen erhaeltst du deine brandneue Website - startklar fuer den Livegang.',
        icon: 'rocket',
      },
    ];
  }
}