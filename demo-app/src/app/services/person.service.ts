import { Injectable } from "@angular/core";
import { PersonInterface } from "../interfaces/PersonInterface";

@Injectable()
export class PersonService {
    public persons : Array<PersonInterface> = new Array<PersonInterface>()

    constructor() {
        this.persons.push({firstName : 'toto', lastName:'tata', phone:'0123456789'})
    }
    public addPerson(person:PersonInterface) : void {
        this.persons.push(person)
    }

    public deletePerson(index) {
        this.persons.splice(index,1)
    }
}