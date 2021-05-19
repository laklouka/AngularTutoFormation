import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartModule } from 'src/cart-module/cart.module';
import { DemoRouteModule } from 'src/demo-route-module/demo-route.module';
import { FirstModule } from 'src/firstModule/first.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    CartModule,
    DemoRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
