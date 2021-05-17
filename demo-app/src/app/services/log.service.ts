import { Injectable } from "@angular/core";

@Injectable()
export class LogService {

    public log(message:any) {
        console.warn(message)
    }
}