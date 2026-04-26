import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface CaseStudy {
  name: string;
  slug: string;
  category: string;
  resultKey: string;
  descriptionKey: string;
  tone: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesComponent {
  protected readonly cases: CaseStudy[] = [
    {
      name: 'Northlane MedCare',
      slug: 'northlane',
      category: 'Healthcare SEO',
      resultKey: 'caseStudies.northlane.result',
      descriptionKey: 'caseStudies.northlane.desc',
      tone: 'violet',
    },
    {
      name: 'Nexa Commerce',
      slug: 'nexa',
      category: 'E-commerce CRO',
      resultKey: 'caseStudies.nexa.result',
      descriptionKey: 'caseStudies.nexa.desc',
      tone: 'coral',
    },
    {
      name: 'Voltica SaaS',
      slug: 'voltica',
      category: 'Paid Acquisition',
      resultKey: 'caseStudies.voltica.result',
      descriptionKey: 'caseStudies.voltica.desc',
      tone: 'mint',
    },
  ];
}
