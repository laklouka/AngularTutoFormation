import { Component } from "@angular/core";

@Component({
    selector:'demo-if',
    template : `
        <div>
        <div *ngIf="show; else elseBlock">Show Ok</div>
        <ng-template #elseBlock>show not ok</ng-template>
        <button (click)="toggle()">toggle</button>
        </div>    `
})

export class DemoIf {
    show : boolean = false

    toggle() {
        this.show = !this.show
    }
} 