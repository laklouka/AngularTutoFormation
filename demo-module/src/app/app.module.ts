import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstModule } from 'src/firstModule/first.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
