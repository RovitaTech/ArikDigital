import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProcessComponent } from './components/process/process.component';
import { ServicesComponent } from './components/services/services.component';
import { StatsComponent } from './components/stats/stats.component';
import { TeamComponent } from './components/team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    ClientsComponent,
    StatsComponent,
    ServicesComponent,
    ProcessComponent,
    PricingComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}