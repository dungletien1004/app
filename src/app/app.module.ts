import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './mui.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomeDrawerComponent } from './components/home/home-drawer/home-drawer.component';
import { HomeShopComponent } from './components/home/home-shop/home-shop.component';
import { HomeCartComponent } from './components/home/home-cart/home-cart.component';
import { HomeProfileComponent } from './components/home/home-profile/home-profile.component';
import { ShopHeaderComponent } from './components/home/home-shop/shop-header/shop-header.component';
import { ShopBodyComponent } from './components/home/home-shop/shop-body/shop-body.component';
import { ShopItemComponent } from './components/home/home-shop/shop-item/shop-item.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';
import { CartItemComponent } from './components/home/home-cart/cart-item/cart-item.component';
// import { NgxMaterialRatingModule } from 'ngx-material-rating';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeDrawerComponent,
    HomeShopComponent,
    HomeCartComponent,
    HomeProfileComponent,
    ShopHeaderComponent,
    ShopBodyComponent,
    ShopItemComponent,
    StarRatingComponent,
    ProductDetailsComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxMaterialRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
