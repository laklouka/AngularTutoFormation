import {Component, Input} from "@angular/core"

@Component({
    selector :'hello-component',
    // template : "<div>{{message}}<second-component></second-component></div>"
    templateUrl : './hello.component.html'
})
export class HelloComponent  {
    @Input() message : String

    constructor() {
        this.message = "Hello from our first component"
    }
}