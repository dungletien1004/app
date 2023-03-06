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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeDrawerComponent,
    HomeShopComponent,
    HomeCartComponent,
    HomeProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
