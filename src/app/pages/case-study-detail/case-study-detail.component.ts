import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

const CASE_META = {
  northlane: {
    image: '/assets/images/ceo.webp',
    tone: 'violet',
  },
  nexa: {
    image: '/assets/images/marketing.webp',
    tone: 'coral',
  },
  voltica: {
    image: '/assets/images/cto.webp',
    tone: 'mint',
  },
} as const;

type CaseSlug = keyof typeof CASE_META;

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './case-study-detail.component.html',
  styleUrl: './case-study-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyDetailComponent {
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

  protected readonly isValid = computed(() => Object.hasOwn(CASE_META, this.routeSlug()));

  protected readonly translationKey = computed(() => `caseStudyDetails.${this.routeSlug()}`);

  protected readonly heroImage = computed(() => {
    if (!this.isValid()) {
      return '/assets/images/ceo.webp';
    }

    const slug = this.routeSlug() as CaseSlug;
    return CASE_META[slug].image;
  });

  protected readonly tone = computed(() => {
    if (!this.isValid()) {
      return 'violet';
    }

    const slug = this.routeSlug() as CaseSlug;
    return CASE_META[slug].tone;
  });

  protected onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;

    if (!target) {
      return;
    }

    this.translate.use(target.value === 'en' ? 'en' : 'de');
  }
}
