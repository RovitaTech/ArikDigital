import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  templateUrl: './cursor-follower.component.html',
  styleUrl: './cursor-follower.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorFollowerComponent {
  protected readonly x = signal(-100);
  protected readonly y = signal(-100);
  protected readonly enabled = typeof window !== 'undefined'
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    && window.matchMedia('(pointer: fine)').matches;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.enabled) {
      return;
    }

    this.x.set(event.clientX);
    this.y.set(event.clientY);
  }
}
