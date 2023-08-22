import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { SingleIntegrationComponent } from './components/pages/single-integration/single-integration.component';



const routes: Routes = [
  {
    path: '',
    component: HomeOneComponent,
  },
  
  { path: 'contact', component: ContactComponent },
  { path: 'single-integration', component: SingleIntegrationComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
