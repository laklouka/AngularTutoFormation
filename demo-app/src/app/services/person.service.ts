import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { PersonInterface } from "../interfaces/PersonInterface";
import { LogService } from "./log.service";

@Injectable()
export class PersonService {
    public persons : Array<PersonInterface> = new Array<PersonInterface>()

    public subjectPerson : Subject<any> = new Subject<any>()

    constructor(public logService:LogService) {
       
        this.persons.push({firstName : 'toto', lastName:'tata', phone:'0123456789'})
    }
    public addPerson(person:PersonInterface) : void {
        this.persons.push(person)
        this.logService.log(person)
    }

    public updatePerson(person:PersonInterface, index:number) : void {
        this.persons[index] = person
        this.logService.log(person)
    }

    public deletePerson(index) {
        this.persons.splice(index,1)
        this.logService.log("delete Ok")

    }


}