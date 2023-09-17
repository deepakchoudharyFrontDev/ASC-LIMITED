import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { HomeComponent } from './share-pages/home/home.component';
import { ProductComponent } from './share-pages/product/product.component';
import { ContactComponent } from './share-pages/contact/contact.component';
import { AboutComponent } from './share-pages/about/about.component';

import {MatIconModule} from '@angular/material/icon';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgImageSliderModule ,
    FormsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
