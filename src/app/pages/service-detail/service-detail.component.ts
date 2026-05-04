import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

const VALID_SLUGS = [
  'seo-content',
  'branding',
  'ui-ux-design',
  'advertising',
  'paid-ads',
  'social-media',
  'web-design',
  'analytics',
] as const;

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly translate = inject(TranslateService);

  protected readonly currentLang = toSignal(
    this.translate.onLangChange.pipe(map((e) => e.lang)),
    { initialValue: this.translate.currentLang ?? 'de' },
  );

  private readonly routeSlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  protected readonly isValid = computed(() => {
    const slug = this.routeSlug();
    return (VALID_SLUGS as readonly string[]).includes(slug);
  });

  protected readonly translationKey = computed(() => {
    const slug = this.routeSlug();
    return `serviceDetails.${slug}`;
  });

  protected onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (!target) {
      return;
    }
    const lang = target.value === 'en' ? 'en' : 'de';
    this.translate.use(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang);
    }
  }
}
