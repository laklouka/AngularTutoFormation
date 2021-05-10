import {Component} from "@angular/core"

@Component({
    selector :'hello-component',
    template : "<div>{{message}}<second-component></second-component></div>"
})
export class HelloComponent  {
    message : String

    constructor() {
        this.message = "Hello from our first component"
    }
}