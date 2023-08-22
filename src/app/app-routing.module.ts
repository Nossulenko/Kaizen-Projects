import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { HomeOneComponent } from './components/pages/home-one/home-one.component';

import { LoginComponent } from './components/pages/login/login.component';

import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';

import { RequestForDemoComponent } from './components/pages/request-for-demo/request-for-demo.component';

import { SignupComponent } from './components/pages/signup/signup.component';
import { SingleIntegrationComponent } from './components/pages/single-integration/single-integration.component';



const routes: Routes = [
  {
    path: '',
    component: HomeOneComponent,
  },
  
  { path: 'contact', component: ContactComponent },

  { path: 'single-integration', component: SingleIntegrationComponent },

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
