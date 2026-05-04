import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {
  private readonly translate = inject(TranslateService);

  protected readonly currentLang = toSignal(
    this.translate.onLangChange.pipe(map((e) => e.lang)),
    { initialValue: this.translate.currentLang ?? 'de' },
  );

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
