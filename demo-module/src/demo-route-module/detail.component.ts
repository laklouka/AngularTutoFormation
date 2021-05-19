import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'detail',
    template : `
        <div>
            <h2>Detail {{id}}</h2>
        </div>
    `
})
export class DetailComponent implements OnInit {
    id:number

    constructor(private route:ActivatedRoute) {
        console.log("test")
    }
    ngOnInit(): void {
        this.route.params.subscribe(pars => {
            this.id = pars["id"]
        })
    }
}