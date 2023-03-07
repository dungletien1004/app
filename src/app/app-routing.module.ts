import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCartComponent } from './components/home/home-cart/home-cart.component';
import { HomeProfileComponent } from './components/home/home-profile/home-profile.component';
import { HomeShopComponent } from './components/home/home-shop/home-shop.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'shop',
        component: HomeShopComponent,
      },
      { path: 'cart', component: HomeCartComponent },
      { path: 'profile', component: HomeProfileComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
