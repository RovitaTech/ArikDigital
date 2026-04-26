import { Routes } from '@angular/router';
import { App } from './app';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { CaseStudyDetailComponent } from './pages/case-study-detail/case-study-detail.component';

export const appRoutes: Routes = [
  { path: '', component: App },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'case-studies/:slug', component: CaseStudyDetailComponent },
  { path: '**', redirectTo: '' },
];
