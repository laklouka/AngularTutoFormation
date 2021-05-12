import { Component, Input } from "@angular/core";

@Component({
    selector : 'demo-for',
    template : `
        <div>
            <element *ngFor="let e of elements; let i = index; let isOdd = odd; let isFirst = first" [element]="e">
                {{i}}, {{isOdd}}, {{isFirst}}
            </element>
        </div>
    `
})
export class DemoFor {
    elements : Array<string> = new Array<string>() 
    constructor() {
        this.elements.push("toto");
        this.elements.push("tata");
        this.elements.push("titi");
    }
}

@Component({
    selector : 'element',
    template : `<div>{{element}}<div><ng-content></ng-content></div></div>`
})
export class ElementFor {
    @Input() element
}