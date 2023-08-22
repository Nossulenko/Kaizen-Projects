import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';

import { HeaderComponent } from './components/shared/header/header.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HeroOneComponent } from './components/pages/home-one/hero-one/hero-one.component';
import { PromoComponent } from './components/pages/home-one/promo/promo.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { CtaOneComponent } from './components/shared/cta-one/cta-one.component';

import { WorkProcessComponent } from './components/shared/work-process/work-process.component';
import { WhyChooseUsComponent } from './components/pages/home-one/why-choose-us/why-choose-us.component';
import { ImageFeaturesComponent } from './components/pages/home-one/image-features/image-features.component';

import { ContactComponent } from './components/pages/contact/contact.component';

import { SingleIntegrationComponent } from './components/pages/single-integration/single-integration.component';

import { OthersPageHeaderComponent } from './components/shared/others-page-header/others-page-header.component';

import { BlogColumnComponent } from './components/shared/blog-column/blog-column.component';

import { ContactPromoComponent } from './components/pages/contact/contact-promo/contact-promo.component';
import { ContactUsFormComponent } from './components/pages/contact/contact-us-form/contact-us-form.component';

import { RequestForDemoComponent } from './components/pages/request-for-demo/request-for-demo.component';
import { RequestForDemoFormComponent } from './components/pages/request-for-demo-form/request-for-demo-form.component';
import { RequestForDemoFooterComponent } from './components/pages/request-for-demo-footer/request-for-demo-footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { SingleIntegrationPageHeaderComponent } from './components/pages/single-integration/single-integration-page-header/single-integration-page-header.component';
import { RelatedIntegrationsComponent } from './components/pages/single-integration/related-integrations/related-integrations.component';
import { IntegrationArticleComponent } from './components/pages/single-integration/integration-article/integration-article.component';
import { TestimonialSliderComponent } from './components/shared/testimonial-slider/testimonial-slider.component';


import { NgParticlesModule } from 'ng-particles';
import { PortfolioComponent } from './portfolio/portfolio.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeOneComponent,
    HeroOneComponent,
    PromoComponent,
    FooterComponent,
    CtaOneComponent,
    WorkProcessComponent,
    WhyChooseUsComponent,
    ImageFeaturesComponent,
    ContactComponent,
    SingleIntegrationComponent,
    OthersPageHeaderComponent,
    BlogColumnComponent,
    ContactPromoComponent,
    ContactUsFormComponent,
    RequestForDemoComponent,
    RequestForDemoFormComponent,
    RequestForDemoFooterComponent,
    LoginComponent,
    SignupComponent,
    PasswordResetComponent,
    PageNotFoundComponent,
    ComingSoonComponent,
    SingleIntegrationPageHeaderComponent,
    RelatedIntegrationsComponent,
    IntegrationArticleComponent,
    TestimonialSliderComponent,
    PortfolioComponent,
    
   
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule,NgParticlesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
