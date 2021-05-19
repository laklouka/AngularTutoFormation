import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router"
import { DetailComponent } from "./detail.component";
import { FirstComponent } from "./first.component";
import { HomeComponent } from "./home.component";
import { MainComponent } from "./main.component";
import { SecondComponent } from "./second.component";

//Création Routes
export const routes : Routes = [
    {path:'', component:HomeComponent},
    {path:'first', component:FirstComponent},
    {path:'second', component:SecondComponent},
    {path:'detail/:id', component:DetailComponent},
]

@NgModule({
    imports : [BrowserModule, RouterModule.forRoot(routes)],
    declarations:[FirstComponent, SecondComponent, MainComponent, HomeComponent, DetailComponent],
    exports : [MainComponent]
})
export class DemoRouteModule {

}