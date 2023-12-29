import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ServicePricesComponent } from './pages/service-prices/service-prices.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'Our-Services', component: OurServicesComponent},
  {path: 'service-prices', component: ServicePricesComponent},
  {path: 'terms-conditions', component: TermsConditionsComponent},
  {path: 'authorization', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
