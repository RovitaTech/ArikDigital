import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProcessComponent } from './components/process/process.component';
import { ServicesComponent } from './components/services/services.component';
import { StatsComponent } from './components/stats/stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    ProcessComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy {
  readonly showIntro = signal(true);
  readonly language = signal<'en' | 'de'>('de');
  private introTimerId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      this.showIntro.set(false);
      return;
    }

    const introDurationMs = 1850;
    this.introTimerId = window.setTimeout(() => {
      this.showIntro.set(false);
      this.introTimerId = null;
    }, introDurationMs);
  }

  ngOnDestroy(): void {
    if (this.introTimerId !== null) {
      clearTimeout(this.introTimerId);
      this.introTimerId = null;
    }
  }

  protected setLanguage(language: 'en' | 'de'): void {
    this.language.set(language);
  }
}