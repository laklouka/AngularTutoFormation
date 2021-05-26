import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ProductsService } from 'src/product-module/services/products.service';

import { AppComponent } from './app.component';
import { GuardService } from './guard.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { PricePipe } from './price.pipe';


const routes : Routes = [
  {path : '', component : ProductsComponent},
  {path : 'login', component : LoginComponent},
  // {path : 'panier', component : CartComponent},
  // {path : 'panier/:id', component : CartComponent},
  {path: 'panier', loadChildren : () => import('./../cart-module/cart.module').then(m => m.CartModule), canActivate:[GuardService]},
  {path: 'formulaire', loadChildren : () => import('./../product-form/product-form.module').then(m => m.ProductFormModule), canActivate:[GuardService]},
  {path : 'detail/:id', component : ProductComponent, children : [
          {path : 'comment', component:CommentComponent},
          {path : 'spec', component:SpecComponent},
  ]},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FirstModule,
    //CartModule,
    // DemoRouteModule,
    ProductModule,
    FormsModule
  ],
  providers: [LoginService, GuardService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
