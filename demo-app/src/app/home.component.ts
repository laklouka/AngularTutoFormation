import { Component } from "@angular/core";
import { PersonInterface } from "./interfaces/PersonInterface";

@Component({
    selector : 'home-person',
    templateUrl :'./home.component.html'
})

export class HomePerson {

    persons : Array<PersonInterface> = new Array<PersonInterface>()
    personToEdit:any = undefined
    validPerson(person : PersonInterface) {
        if(this.personToEdit == undefined)
            this.persons.push(person)
        else {
            this.persons[this.personToEdit.index] = {...person}
            this.personToEdit = undefined
        }
        console.log(this.persons)
    }

    deletePerson(index:number) {
        this.persons.splice(index,1)
        console.log(this.persons)
    }

    editPerson(person:any) {
        this.personToEdit = person
    }
}