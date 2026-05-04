import { Routes } from '@angular/router';
import { App } from './app';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { CaseStudyDetailComponent } from './pages/case-study-detail/case-study-detail.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const appRoutes: Routes = [
  { path: '', component: App },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'case-studies/:slug', component: CaseStudyDetailComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' },
];
