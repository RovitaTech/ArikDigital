import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  private readonly translateSvc = inject(TranslateService);
  protected readonly isCollapsed = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly bookingUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules';
  protected readonly currentLang = toSignal(
    this.translateSvc.onLangChange.pipe(map((e) => e.lang)),
    { initialValue: this.translateSvc.currentLang ?? 'de' },
  );
  protected readonly navItems = [
    { id: 'about', labelKey: 'nav.about' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'work', labelKey: 'nav.caseStudies' },
    { id: 'contact', labelKey: 'nav.contact' },
  ];

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

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 1024 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  protected onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;

    if (!target) {
      return;
    }

    this.translateSvc.use(target.value === 'en' ? 'en' : 'de');
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((state) => !state);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}