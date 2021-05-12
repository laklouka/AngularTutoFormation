import { Component } from "@angular/core";
import { PersonInterface } from "./interfaces/PersonInterface";

@Component({
    selector : 'home-person',
    templateUrl :'./home.component.html',
    styleUrls : ['./home.component.css']
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
    styleH2 : any

    size : number = 30

    constructor() {
        this.styleH2 = {
            'color' : 'red',
            'font-size' : this.size+'px'
        }
    }
    deletePerson(index:number) {
        this.persons.splice(index,1)
        console.log(this.persons)
    }

    editPerson(person:any) {
        this.personToEdit = person
    }

    updatePolice() {
        this.size = this.size+1
        this.styleH2 = { 'font-size' : this.size + 'px'}
        console.log(this.styleH2)
    }
}