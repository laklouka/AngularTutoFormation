import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector : 'count',
    templateUrl : './count.component.html'
})
export class CountComponent {
    count : number = 0
    //Pour créer un event, on utilise l'annotation @OutPut
    @Output() result = new EventEmitter<number>()
    increment() {
        this.count++
        this.result.emit(this.count)
    }

    decrement() {
        this.count--
        this.result.emit(this.count)
    }

    update(event) {
        this.count = parseInt(event.target.value)
        this.result.emit(this.count)
    }
}