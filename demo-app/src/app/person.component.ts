import { Component, Input } from "@angular/core";

@Component({
    selector : 'person-component',
    template : "<div>Nom : {{lastName}}, prénom : {{firstName}}, téléphone : {{phone}}</div>"
})
export class PersonComponent {
    @Input()firstName : String
    @Input()lastName : String
    @Input()phone : String
}