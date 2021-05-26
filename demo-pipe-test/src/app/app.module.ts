import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    BrowserDynamicTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[CustomPipe]
})
export class AppModule { }
