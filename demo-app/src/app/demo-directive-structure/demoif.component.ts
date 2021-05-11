import { Component } from "@angular/core";

//Exemple ngIf
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


@Component({
    selector:'demo-switch',
    template : `
        <div>
            <a (click)="setMenu(1)">Menu 1</a>
            <a (click)="setMenu(2)">Menu 2</a>
            <a (click)="setMenu(3)">Menu 3</a>
        </div>
        <div [ngSwitch]="menu">
            <div *ngSwitchCase="1">Menu 1</div>
            <div *ngSwitchCase="2">Menu 2</div>
            <div *ngSwitchCase="3">Menu 3</div>
        </div>
    ` 
})

export class DemoSwitch {
    menu : number = 1

    setMenu(val:number) {
        this.menu = val
    }
}