import { Component, Input } from "@angular/core";
import { PersonInterface } from "./interfaces/PersonInterface";

@Component({
    selector : 'person-component',
    template : "<div>Nom : {{person.lastName}}, prénom : {{person.firstName}}, téléphone : {{person.phone}}</div>"
})
export class PersonComponent {
    // @Input()firstName : String
    // @Input()lastName : String
    // @Input()phone : String

    @Input() person : PersonInterface
}