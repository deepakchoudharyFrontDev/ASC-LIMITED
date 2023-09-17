import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './share-pages/home/home.component';
import { ProductComponent } from './share-pages/product/product.component';
import { AboutComponent } from './share-pages/about/about.component';
import { ContactComponent } from './share-pages/contact/contact.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"product",component:ProductComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"contact",component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
