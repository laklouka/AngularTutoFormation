import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ObservableService {
    public data:any

    constructor() {
        this.data = new Subject<number>()
    }

    // send(callback){

    // }
}