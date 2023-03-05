import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CareerSingleComponent } from './components/pages/career-single/career-single.component';
import { CareerComponent } from './components/pages/career/career.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HelpCenterDetailsComponent } from './components/pages/help-center-details/help-center-details.component';
import { HelpCenterComponent } from './components/pages/help-center/help-center.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { IntegrationsComponent } from './components/pages/integrations/integrations.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewsDetailsComponent } from './components/pages/news-details/news-details.component';
import { NewsComponent } from './components/pages/news/news.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { RequestForDemoComponent } from './components/pages/request-for-demo/request-for-demo.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SingleIntegrationComponent } from './components/pages/single-integration/single-integration.component';
import { SingleServiceComponent } from './components/pages/single-service/single-service.component';


const routes: Routes = [
  {
    path: '',
    component: HomeOneComponent,
  },
  
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'single-service', component: SingleServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news-details', component: NewsDetailsComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'single-integration', component: SingleIntegrationComponent },
  { path: 'career', component: CareerComponent },
  { path: 'single-career', component: CareerSingleComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'help-center-details', component: HelpCenterDetailsComponent },
  { path: 'request-for-demo', component: RequestForDemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
