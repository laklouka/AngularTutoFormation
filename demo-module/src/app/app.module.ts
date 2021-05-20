import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from 'src/cart-module/cart.module';
import { CartComponent } from 'src/cart-module/components/cart-component/cart.component';
import { DemoRouteModule } from 'src/demo-route-module/demo-route.module';
import { FirstModule } from 'src/firstModule/first.module';
import { CommentComponent } from 'src/product-module/components/comment-component/comment.component';
import { ProductComponent } from 'src/product-module/components/product-component/product.component';
import { ProductsComponent } from 'src/product-module/components/products-component/products.component';
import { SpecComponent } from 'src/product-module/components/spec-component/spec.component';
import { ProductModule } from 'src/product-module/product.module';

import { AppComponent } from './app.component';


const routes : Routes = [
  {path : '', component : ProductsComponent},
  {path : 'panier', component : CartComponent},
  {path : 'panier/:id', component : CartComponent},
  {path : 'detail/:id', component : ProductComponent, children : [
          {path : 'comment', component:CommentComponent},
          {path : 'spec', component:SpecComponent},
  ]},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    CartModule,
    // DemoRouteModule,
    ProductModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
