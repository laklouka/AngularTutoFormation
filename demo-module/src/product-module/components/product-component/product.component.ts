import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductInterface } from "src/product-module/interfaces/ProductInterface";
import { ProductsService } from "src/product-module/services/products.service";

@Component({
    selector : 'product',
    templateUrl : "./product.component.html"
})
export class ProductComponent implements OnInit {
    product : ProductInterface

    constructor(private productService:ProductsService, private route:ActivatedRoute) {

    }
    ngOnInit(): void {
        this.route.params.subscribe(pars => {
            const id = pars["id"]
            if(id != undefined) {
                this.product = this.productService.products.find(p => p.id == id)
            }
        })
    }
}