import { Component } from "@angular/core";
import { Router } from "@angular/router";



@Component({
    selector : 'first',
    template : `
        <div>
            <h2>Second Component</h2>
            <div *ngFor='let e of elements'>
                <a (click)="goTo(e.id)">{{e.name}}</a>
            </div>
        </div>
    `
})
//On peut utiliser également [routerLink]="['/detail',e.id]" au lieu du click
export class SecondComponent {
     elements = [{id : 1, name : 'toto'},{id : 2, name : 'tata'},{id : 3, name : 'titi'}]

     constructor(private router:Router) {

     }

     goTo(id) {
         this.router.navigate(['/detail', id])
     }
}