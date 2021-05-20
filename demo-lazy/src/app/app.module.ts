import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  {path : '', component:HomeComponent},
  {path : 'login', component:LoginComponent},
  {path : 'book', loadChildren : () => import("./book/book.module").then(m => m.BookModule), canActivate :[AuthService]}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
