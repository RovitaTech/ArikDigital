import { ChangeDetectionStrategy, Component, HostListener, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  readonly language = input<'en' | 'de'>('de');
  readonly languageChange = output<'en' | 'de'>();
  protected readonly isCollapsed = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly bookingUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules';
  protected readonly navItems = [
    { id: 'about', label: { en: 'About', de: 'Ueber uns' } },
    { id: 'services', label: { en: 'Services', de: 'Leistungen' } },
    { id: 'work', label: { en: 'Case Studies', de: 'Case Studies' } },
    { id: 'contact', label: { en: 'Contact', de: 'Kontakt' } },
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

    const nextLanguage = target.value === 'en' ? 'en' : 'de';
    this.languageChange.emit(nextLanguage);
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