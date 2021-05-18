import { Component } from "@angular/core";
import { ProductCartInterface } from "src/cart-module/interfaces/ProductCartInterface";
import { CartService } from "src/cart-module/services/cart.service";

@Component({
    selector : 'cart',
    templateUrl:'./cart.component.html'
})
export class CartComponent {

    products : Array<ProductCartInterface>

    constructor(private cartService:CartService) {
        this.products = this.cartService.products
        console.log(this.products)
    }
}