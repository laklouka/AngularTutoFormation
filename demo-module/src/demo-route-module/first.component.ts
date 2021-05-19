import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {routes} from "./demo-route.module"
@Component({
    selector : 'first',
    template : `
        <div>
            <h2>First Component</h2>
            <button (click)="goTo('')">Go Home</button>
            <button (click)="goTo('second')">Go Second</button>
        </div>
    `
})
export class FirstComponent {

    constructor(private router:Router) {

    }
    goTo(name):void {
        //Utiliser le nom du composant et chercher le path à partir de notre tableau de routes
        //const path = routes.find(e => e.component == name).path
        this.router.navigate(['/'+name])
    }
}