import { ChangeDetectionStrategy, Component, HostListener, inject, input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly animateIn = input(false);
  private readonly translateSvc = inject(TranslateService);
  protected readonly bookingUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules';

  protected readonly headlineLine1 = toSignal(
    this.translateSvc.stream('hero.line1').pipe(map((v) => String(v).split(' '))),
    { initialValue: [] as string[] },
  );
  protected readonly headlineLine2 = toSignal(
    this.translateSvc.stream('hero.line2').pipe(map((v) => String(v).split(' '))),
    { initialValue: [] as string[] },
  );
  protected readonly headlineLine3Main = toSignal(
    this.translateSvc.stream('hero.line3Main').pipe(map((v) => String(v).split(' '))),
    { initialValue: [] as string[] },
  );
  protected readonly headlineLine3Accent = toSignal(
    this.translateSvc.stream('hero.line3Accent').pipe(map((v) => String(v).split(' '))),
    { initialValue: [] as string[] },
  );

  private readonly canUseWindow = typeof window !== 'undefined';
  private readonly canAnimate = this.canUseWindow
    ? !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  private readonly canParallax = this.canUseWindow
    ? this.canAnimate && !window.matchMedia('(pointer: coarse)').matches
    : false;

  protected leftGlowTransform = 'translate(0px, 0px)';
  protected rightGlowTransform = 'translate(0px, 0px)';

  @HostListener('window:mousemove', ['$event'])
  protected onMouseMove(event: MouseEvent): void {
    if (!this.canParallax) {
      return;
    }

    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    this.leftGlowTransform = `translate(${x}px, ${y}px)`;
    this.rightGlowTransform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
  }

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}