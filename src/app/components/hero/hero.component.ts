import { ChangeDetectionStrategy, Component, HostListener, input, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly animateIn = input(false);
  readonly language = input<'en' | 'de'>('de');
  protected readonly bookingUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules';
  protected readonly leftGlowTransform = signal('translate(0px, 0px)');
  protected readonly rightGlowTransform = signal('translate(0px, 0px)');
  protected readonly headlineLine1 = signal({
    en: ['Custom', 'websites', 'that'],
    de: ['Individuelle', 'Websites,', 'die'],
  });
  protected readonly headlineLine2 = signal({
    en: ['elevate', 'your', 'brand'],
    de: ['deine', 'Marke', 'aufwerten'],
  });
  protected readonly headlineLine3Main = signal({
    en: ['and', 'drive', 'real'],
    de: ['und', 'echte'],
  });
  protected readonly headlineLine3Accent = signal({
    en: ['results.'],
    de: ['Ergebnisse', 'liefern.'],
  });

  private readonly canUseWindow = typeof window !== 'undefined';
  private readonly canAnimate = this.canUseWindow
    ? !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  private readonly canParallax = this.canUseWindow
    ? this.canAnimate && !window.matchMedia('(pointer: coarse)').matches
    : false;

  @HostListener('window:mousemove', ['$event'])
  protected onMouseMove(event: MouseEvent): void {
    if (!this.canParallax) {
      return;
    }

    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    this.leftGlowTransform.set(`translate(${x}px, ${y}px)`);
    this.rightGlowTransform.set(`translate(${-x * 0.6}px, ${-y * 0.6}px)`);
  }

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}