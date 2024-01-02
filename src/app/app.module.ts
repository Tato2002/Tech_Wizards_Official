import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { ClickOutsideDirective } from './components/header/clickOutside.directive';
import { PassrecoveryComponent } from './pages/passrecovery/passrecovery.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ServicePricesComponent } from './pages/service-prices/service-prices.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { FacebookChatComponent } from './components/facebook-chat/facebook-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    FooterComponent,
    HomeComponent,
    OurServicesComponent,
    LoginComponent,
    ProductsComponent,
    AboutUsComponent,
    HeaderComponent,
    ProfileComponent,
    CartComponent,
    PassrecoveryComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ServicePricesComponent,
    TermsConditionsComponent,
    FacebookChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLinkActive,
    BrowserAnimationsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
