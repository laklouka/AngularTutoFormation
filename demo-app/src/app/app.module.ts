import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountComponent } from './count.component';
import { DemoFor, ElementFor } from './demo-directive-structure/demofor.component';
import { DemoIf, DemoSwitch } from './demo-directive-structure/demoif.component';
import { FormPerson } from './form.component';
import {HelloComponent} from "./hello.component"
import { HomePerson } from './home.component';
import { PersonComponent } from './person.component';
import { SecondComponent } from './second.component';
import { AutoComponentComponent } from './auto-component/auto-component.component';
import { FirstService } from './services/first.service';
import { PersonService } from './services/person.service';
import { LogService } from './services/log.service';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SecondComponent,
    PersonComponent,
    CountComponent,
    FormPerson,
    HomePerson,
    DemoIf,
    DemoSwitch,
    DemoFor,
    ElementFor,
    AutoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FirstService, PersonService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
