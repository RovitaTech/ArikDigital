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
  protected readonly bookingUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules';
  protected readonly navItems = [
    { id: 'services', label: { en: 'Services', de: 'Leistungen' } },
    { id: 'process', label: { en: 'Process', de: 'Ablauf' } },
    { id: 'pricing', label: { en: 'Pricing', de: 'Preise' } },
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

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
  }
}