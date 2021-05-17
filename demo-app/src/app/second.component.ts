import { Component } from "@angular/core";
import { FirstService } from "./services/first.service";

@Component({
    selector : 'second-component',
    template : '<div>Second component {{name}}</div>',
    providers : [FirstService]    
})
export class SecondComponent {
        name:string

        constructor(private firstService:FirstService) {
            this.name = this.firstService.name
        }
}