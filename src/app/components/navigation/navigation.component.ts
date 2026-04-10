import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  protected readonly isCollapsed = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollY = window.scrollY;

    if (scrollY > 90) {
      this.isCollapsed.set(true);
      return;
    }

    if (scrollY < 45) {
      this.isCollapsed.set(false);
    }
  }

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}