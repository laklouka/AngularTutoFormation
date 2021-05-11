import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountComponent } from './count.component';
import {HelloComponent} from "./hello.component"
import { PersonComponent } from './person.component';
import { SecondComponent } from './second.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SecondComponent,
    PersonComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
