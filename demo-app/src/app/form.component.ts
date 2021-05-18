import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PersonInterface } from "./interfaces/PersonInterface";
import { PersonService } from "./services/person.service";

@Component({
    selector : 'form-person',
    templateUrl : './form.component.html'
})
export class FormPerson {

    @Output() validPerson = new EventEmitter<PersonInterface>()
    error : boolean = false
    @Input()firstName:String
    @Input()lastName:String
    @Input()phone:String
    index : number = undefined

    constructor(public personService:PersonService) {
        this.personService.subjectPerson.subscribe((obj) => {
            this.firstName = obj.firstName
            this.lastName= obj.lastName
            this.phone = obj.phone
            this.index = obj.index
        })
    }

    confirmClick() {
        if(this.firstName != null && this.lastName != null && this.phone != null) {
            const person : PersonInterface = {
                firstName : this.firstName,
                lastName : this.lastName,
                phone : this.phone,
            }
            this.firstName =""
            this.lastName=""
            this.phone=""
            // this.validPerson.emit(person)
            if(this.index == undefined) {
                this.personService.addPerson(person)
            }
            else {
                this.personService.updatePerson(person, this.index)
            }
            this.error = false
        }
        else {
            this.error = true            
        }
    }
}