import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

type ServiceIcon = 'globe' | 'cart' | 'zap' | 'palette' | 'trending' | 'wrench';

interface ServiceMeta {
  key: string;
  tagKey: string | null;
  icon: ServiceIcon;
  color: string;
  preview: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  private readonly translateSvc = inject(TranslateService);
  protected readonly activeIndex = signal(0);
  protected readonly currentLang = toSignal(
    this.translateSvc.onLangChange.pipe(map((e) => e.lang)),
    { initialValue: this.translateSvc.currentLang ?? 'de' },
  );

  protected readonly services: ServiceMeta[] = [
    { key: 'seoContent', tagKey: 'services.seoContent.tag', icon: 'globe', color: '#6C63FF', preview: '/assets/images/ceo.webp' },
    { key: 'branding', tagKey: null, icon: 'palette', color: '#FFC107', preview: '/assets/images/marketing.webp' },
    { key: 'uiux', tagKey: null, icon: 'palette', color: '#43E8A0', preview: '/assets/images/cto.webp' },
    { key: 'advertising', tagKey: 'services.advertising.tag', icon: 'trending', color: '#FF6584', preview: '/assets/images/ceo.webp' },
    { key: 'paidAds', tagKey: 'services.paidAds.tag', icon: 'cart', color: '#FF6584', preview: '/assets/images/marketing.webp' },
    { key: 'socialMedia', tagKey: 'services.socialMedia.tag', icon: 'zap', color: '#43E8A0', preview: '/assets/images/cto.webp' },
    { key: 'webDesign', tagKey: null, icon: 'zap', color: '#FFC107', preview: '/assets/images/ceo.webp' },
    { key: 'analytics', tagKey: null, icon: 'wrench', color: '#FF6584', preview: '/assets/images/cto.webp' },
  ];

  protected setActive(index: number): void {
    if (index < 0 || index >= this.services.length) {
      return;
    }
    this.activeIndex.set(index);
  }

  protected activeService(): ServiceMeta {
    return this.services[this.activeIndex()] ?? this.services[0];
  }

  protected toSlug(key: string): string {
    const mapToSlug: Record<string, string> = {
      seoContent: 'seo-content',
      branding: 'branding',
      uiux: 'ui-ux-design',
      advertising: 'advertising',
      paidAds: 'paid-ads',
      socialMedia: 'social-media',
      webDesign: 'web-design',
      analytics: 'analytics',
    };

    return mapToSlug[key] ?? 'web-design';
  }
}