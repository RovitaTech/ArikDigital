import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface ClientLogo {
  name: string;
  text: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {

  protected readonly clients: ClientLogo[] = [
    { name: 'Meta', text: 'Meta' },
    { name: 'Amazon', text: 'Amazon' },
    { name: 'Google', text: 'Google' },
    { name: 'Stripe', text: 'Stripe' },
    { name: 'Shopify', text: 'Shopify' },
    { name: 'Netflix', text: 'Netflix' },
    { name: 'Uber', text: 'Uber' },
    { name: 'Airbnb', text: 'Airbnb' },
    { name: 'Slack', text: 'Slack' },
    { name: 'Figma', text: 'Figma' },
    { name: 'PayPal', text: 'PayPal' },
    { name: 'Spotify', text: 'Spotify' },
    { name: 'Adobe', text: 'Adobe' },
    { name: 'Microsoft', text: 'Microsoft' },
    { name: 'Twitter', text: 'Twitter' },
  ];
}