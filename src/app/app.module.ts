import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_commons/navbar/navbar.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { ProductsPageComponent } from './_pages/products-page/products-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
