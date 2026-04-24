import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface CaseStudy {
  name: string;
  category: string;
  result: string;
  description: string;
  tone: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesComponent {
  readonly language = input<'en' | 'de'>('de');

  protected get cases(): CaseStudy[] {
    if (this.language() === 'en') {
      return [
        {
          name: 'Northlane MedCare',
          category: 'Healthcare SEO',
          result: '+240% organic traffic',
          description: 'Content + technical SEO strategy that doubled qualified inbound leads in 5 months.',
          tone: 'violet',
        },
        {
          name: 'Nexa Commerce',
          category: 'E-commerce CRO',
          result: '+68% conversion rate',
          description: 'Checkout and product page redesign with stronger value communication and trust layers.',
          tone: 'coral',
        },
        {
          name: 'Voltica SaaS',
          category: 'Paid Acquisition',
          result: '-37% CAC',
          description: 'Rebuilt ad funnel and landing architecture to increase trial quality while lowering spend.',
          tone: 'mint',
        },
      ];
    }

    return [
      {
        name: 'Northlane MedCare',
        category: 'Healthcare SEO',
        result: '+240% organischer Traffic',
        description: 'Content- und Technical-SEO-Strategie mit deutlich mehr qualifizierten Leads in 5 Monaten.',
        tone: 'violet',
      },
      {
        name: 'Nexa Commerce',
        category: 'E-Commerce CRO',
        result: '+68% Conversion Rate',
        description: 'Relaunch von Checkout und Produktseiten mit klarerem Nutzenversprechen.',
        tone: 'coral',
      },
      {
        name: 'Voltica SaaS',
        category: 'Paid Acquisition',
        result: '-37% CAC',
        description: 'Neuer Ad-Funnel und Landing-Architektur fuer bessere Trial-Qualitaet bei weniger Kosten.',
        tone: 'mint',
      },
    ];
  }
}
