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
import { IntegrationOneComponent } from './components/shared/integration-one/integration-one.component';
import { FaqOneComponent } from './components/shared/faq-one/faq-one.component';
import { WorkProcessComponent } from './components/shared/work-process/work-process.component';
import { WhyChooseUsComponent } from './components/pages/home-one/why-choose-us/why-choose-us.component';
import { ImageFeaturesComponent } from './components/pages/home-one/image-features/image-features.component';
import { WorkProcessTwoComponent } from './components/shared/work-process-two/work-process-two.component';
import { CtaTwoComponent } from './components/shared/cta-two/cta-two.component';
import { PromoTwoComponent } from './components/shared/promo-two/promo-two.component';
import { FeaturesImageFiveComponent } from './components/shared/features-image-five/features-image-five.component';
import { IntegrationTwoComponent } from './components/shared/integration-two/integration-two.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SingleServiceComponent } from './components/pages/single-service/single-service.component';
import { NewsComponent } from './components/pages/news/news.component';
import { NewsDetailsComponent } from './components/pages/news-details/news-details.component';
import { IntegrationsComponent } from './components/pages/integrations/integrations.component';
import { SingleIntegrationComponent } from './components/pages/single-integration/single-integration.component';
import { CareerComponent } from './components/pages/career/career.component';
import { PromoThreeComponent } from './components/shared/promo-three/promo-three.component';
import { WorkProcessThreeComponent } from './components/shared/work-process-three/work-process-three.component';
import { PriceTabComponent } from './components/shared/price-tab/price-tab.component';
import { FaqTwoComponent } from './components/shared/faq-two/faq-two.component';
import { FaqThreeComponent } from './components/shared/faq-three/faq-three.component';
import { SubscribeCtaComponent } from './components/shared/subscribe-cta/subscribe-cta.component';
import { PageHeaderComponent } from './components/pages/about/page-header/page-header.component';
import { OurStoryComponent } from './components/pages/about/our-story/our-story.component';
import { OthersPageHeaderComponent } from './components/shared/others-page-header/others-page-header.component';
import { OpenPositionComponent } from './components/pages/career/open-position/open-position.component';
import { WhyJoinUsComponent } from './components/pages/career/why-join-us/why-join-us.component';
import { CareerSingleComponent } from './components/pages/career-single/career-single.component';
import { CareerSinglePageHeaderComponent } from './components/pages/career-single/career-single-page-header/career-single-page-header.component';
import { RelatedJobsComponent } from './components/pages/career-single/related-jobs/related-jobs.component';
import { JobDetailsComponent } from './components/pages/career-single/job-details/job-details.component';
import { CtaThreeComponent } from './components/shared/cta-three/cta-three.component';
import { WorkProcessFourComponent } from './components/shared/work-process-four/work-process-four.component';
import { IntegrationThreeComponent } from './components/shared/integration-three/integration-three.component';
import { BlogColumnComponent } from './components/shared/blog-column/blog-column.component';
import { BrandLogoComponent } from './components/shared/brand-logo/brand-logo.component';
import { PromoFiveComponent } from './components/shared/promo-five/promo-five.component';
import { TestimonialTabsComponent } from './components/shared/testimonial-tabs/testimonial-tabs.component';
import { PriceListComponent } from './components/shared/price-list/price-list.component';
import { CtaFourComponent } from './components/shared/cta-four/cta-four.component';
import { ServicesGridComponent } from './components/shared/services-grid/services-grid.component';
import { FooterWithBgComponent } from './components/shared/footer-with-bg/footer-with-bg.component';
import { ContactPromoComponent } from './components/pages/contact/contact-promo/contact-promo.component';
import { ContactUsFormComponent } from './components/pages/contact/contact-us-form/contact-us-form.component';
import { TeamsComponent } from './components/pages/about/teams/teams.component';
import { OfficeLocationsComponent } from './components/pages/about/office-locations/office-locations.component';
import { ServiceImageFeatureOneComponent } from './components/pages/single-service/service-image-feature-one/service-image-feature-one.component';
import { ServiceImageFeatureTwoComponent } from './components/pages/single-service/service-image-feature-two/service-image-feature-two.component';
import { ServiceContactFormComponent } from './components/pages/single-service/service-contact-form/service-contact-form.component';
import { NewsPageHeaderComponent } from './components/pages/news/news-page-header/news-page-header.component';
import { HelpCenterComponent } from './components/pages/help-center/help-center.component';
import { HelpCenterDetailsComponent } from './components/pages/help-center-details/help-center-details.component';
import { HelpCenterPageHeaderComponent } from './components/pages/help-center/help-center-page-header/help-center-page-header.component';
import { HelpArticleComponent } from './components/pages/help-center/help-article/help-article.component';
import { HelpCenterDetailsArticleComponent } from './components/pages/help-center-details/help-center-details-article/help-center-details-article.component';
import { RequestForDemoComponent } from './components/pages/request-for-demo/request-for-demo.component';
import { RequestForDemoFormComponent } from './components/pages/request-for-demo-form/request-for-demo-form.component';
import { RequestForDemoFooterComponent } from './components/pages/request-for-demo-footer/request-for-demo-footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { IntegrationBoxComponent } from './components/pages/integrations/integration-box/integration-box.component';
import { SingleIntegrationPageHeaderComponent } from './components/pages/single-integration/single-integration-page-header/single-integration-page-header.component';
import { RelatedIntegrationsComponent } from './components/pages/single-integration/related-integrations/related-integrations.component';
import { IntegrationArticleComponent } from './components/pages/single-integration/integration-article/integration-article.component';
import { TestimonialSliderComponent } from './components/shared/testimonial-slider/testimonial-slider.component';
import { AllNewsComponent } from './components/pages/news/all-news/all-news.component';
import { RelatedNewsComponent } from './components/pages/news/related-news/related-news.component';
import { SingleNewsComponent } from './components/pages/news-details/single-news/single-news.component';
import { NewsCtaComponent } from './components/pages/news-details/news-cta/news-cta.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeOneComponent,
    HeroOneComponent,
    PromoComponent,
    FooterComponent,
    CtaOneComponent,
    IntegrationOneComponent,
    FaqOneComponent,
    WorkProcessComponent,
    WhyChooseUsComponent,
    ImageFeaturesComponent,
    WorkProcessTwoComponent,
    CtaTwoComponent,
    PromoTwoComponent,
    FeaturesImageFiveComponent,
    IntegrationTwoComponent,
    ContactComponent,
    AboutComponent,
    PricingComponent,
    ServicesComponent,
    SingleServiceComponent,
    NewsComponent,
    NewsDetailsComponent,
    IntegrationsComponent,
    SingleIntegrationComponent,
    CareerComponent,
    PromoThreeComponent,
    WorkProcessThreeComponent,
    PriceTabComponent,
    FaqTwoComponent,
    FaqThreeComponent,
    SubscribeCtaComponent,
    PageHeaderComponent,
    OurStoryComponent,
    OthersPageHeaderComponent,
    OpenPositionComponent,
    WhyJoinUsComponent,
    CareerSingleComponent,
    CareerSinglePageHeaderComponent,
    RelatedJobsComponent,
    JobDetailsComponent,
    CtaThreeComponent,
    WorkProcessFourComponent,
    IntegrationThreeComponent,
    BlogColumnComponent,
    BrandLogoComponent,
    PromoFiveComponent,
    TestimonialTabsComponent,
    PriceListComponent,
    CtaFourComponent,
    ServicesGridComponent,
    FooterWithBgComponent,
    ContactPromoComponent,
    ContactUsFormComponent,
    TeamsComponent,
    OfficeLocationsComponent,
    ServiceImageFeatureOneComponent,
    ServiceImageFeatureTwoComponent,
    ServiceContactFormComponent,
    NewsPageHeaderComponent,
    HelpCenterComponent,
    HelpCenterDetailsComponent,
    HelpCenterPageHeaderComponent,
    HelpArticleComponent,
    HelpCenterDetailsArticleComponent,
    RequestForDemoComponent,
    RequestForDemoFormComponent,
    RequestForDemoFooterComponent,
    LoginComponent,
    SignupComponent,
    PasswordResetComponent,
    PageNotFoundComponent,
    ComingSoonComponent,
    IntegrationBoxComponent,
    SingleIntegrationPageHeaderComponent,
    RelatedIntegrationsComponent,
    IntegrationArticleComponent,
    TestimonialSliderComponent,
    AllNewsComponent,
    RelatedNewsComponent,
    SingleNewsComponent,
    NewsCtaComponent,
    
   
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
