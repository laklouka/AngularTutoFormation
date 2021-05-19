import { Component } from "@angular/core";

@Component({
    selector : 'main-route',
    template : `
        <div>
            <h1>Main Component</h1>
            <nav>
                <li>First component</li>
                <li>Second component</li>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})
export class MainComponent {

}