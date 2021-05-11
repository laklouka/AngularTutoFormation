import { Component } from "@angular/core";
import { PersonInterface } from "./interfaces/PersonInterface";

@Component({
    selector : 'home-person',
    templateUrl :'./home.component.html'
})

export class HomePerson {

    persons : Array<PersonInterface> = new Array<PersonInterface>()

    addPerson(person : PersonInterface) {
        this.persons.push(person)
        console.log(this.persons)
    }
}