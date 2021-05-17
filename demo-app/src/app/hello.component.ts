import {Component, Inject, Input} from "@angular/core"
import { FirstService } from "./services/first.service"

@Component({
    selector :'hello-component',
    // template : "<div>{{message}}<second-component></second-component></div>"
    templateUrl : './hello.component.html',
    providers:[FirstService]
})
export class HelloComponent  {
    @Input() message : String

    // constructor(@Inject(FirstService) private firstService) {
    //     this.message = "Hello from our first component "+this.firstService.name
    // }

    constructor(private firstService:FirstService) {
        this.message = "Hello from our first component "+this.firstService.name
    }
}