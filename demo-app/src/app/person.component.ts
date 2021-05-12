import { Component, EventEmitter, Input, Output } from "@angular/core";

import { PersonInterface } from "./interfaces/PersonInterface";

@Component({
    selector : 'person-component',
    template : `
    <div>
        Nom : {{person.lastName}}, prénom : {{person.firstName}}, téléphone : {{person.phone}}
        <a (click)="deletePersonClick()">supprimer</a>
        <a (click)="editPersonClick()">modifier</a>
    </div>
    `
})
export class PersonComponent {
    // @Input()firstName : String
    // @Input()lastName : String
    // @Input()phone : String
    @Input() index : number
    @Input() person : PersonInterface
    @Output() deletePerson = new EventEmitter<number>()
    @Output() editPerson = new EventEmitter<any>();

    deletePersonClick() {
        this.deletePerson.emit(this.index)
    }

    editPersonClick() {
        this.editPerson.emit({...this.person, index : this.index})
    }
}