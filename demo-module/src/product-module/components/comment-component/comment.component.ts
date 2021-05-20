import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'comment',
    templateUrl :"./comment.component.html"
})
export class CommentComponent implements OnInit {
    productId : number

    constructor(private route:ActivatedRoute) {
    }
    ngOnInit(): void {
       
        this.route.parent.params.subscribe(pars => {
            this.productId = pars["id"]
        })
    }
}