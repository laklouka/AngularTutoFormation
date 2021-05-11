import { Component, EventEmitter, Output } from "@angular/core";
import { PersonInterface } from "./interfaces/PersonInterface";

@Component({
    selector : 'form-person',
    templateUrl : './form.component.html'
})
export class FormPerson {

    @Output() addPerson = new EventEmitter<PersonInterface>()

    firstName:String
    lastName:String
    phone:String

    confirmClick() {
        const person : PersonInterface = {
            firstName : this.firstName,
            lastName : this.lastName,
            phone : this.phone,
        }
        this.firstName =""
        this.lastName=""
        this.phone=""
        this.addPerson.emit(person)
    }
}