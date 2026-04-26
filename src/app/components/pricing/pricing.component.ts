import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface PlanItem {
  key: 'start' | 'growth' | 'premium';
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  protected activePlanIndex = 1;

  protected readonly plans: PlanItem[] = [{ key: 'start' }, { key: 'growth' }, { key: 'premium' }];

  protected setActivePlan(index: number): void {
    this.activePlanIndex = index;
  }

  protected isActive(index: number): boolean {
    return this.activePlanIndex === index;
  }

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}