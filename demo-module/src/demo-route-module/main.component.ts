import { Component } from "@angular/core";

@Component({
    selector : 'main-route',
    template : `
        <div>
            <h1>Main Component</h1>
            <nav>
                <li><a routerLink="/first">First component</a></li>
                <li><a routerLink="/second">Second component</a></li>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})
export class MainComponent {

}