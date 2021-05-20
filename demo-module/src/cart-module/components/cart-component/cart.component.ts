import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductCartInterface } from "src/cart-module/interfaces/ProductCartInterface";
import { CartService } from "src/cart-module/services/cart.service";
import { ProductsService } from "src/product-module/services/products.service";

@Component({
    selector : 'cart',
    templateUrl:'./cart.component.html'
})
export class CartComponent implements OnInit{

    products : Array<ProductCartInterface>

    constructor(private cartService:CartService, private productsService:ProductsService, private route:ActivatedRoute) {
        this.products = this.cartService.products
        console.log(this.products)
    }
    ngOnInit(): void {
        this.route.params.subscribe(pars => {
            const id = pars["id"]
            if(id != undefined) {
                const product = this.productsService.products.find(p => p.id == id)
                if(product != undefined) {
                    this.cartService.addProduct(product)
                }
            }
        })
    }
}