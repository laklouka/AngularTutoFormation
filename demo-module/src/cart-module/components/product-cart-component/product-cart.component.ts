import { Component, Input, OnInit } from "@angular/core";
import { ProductCartInterface } from "src/cart-module/interfaces/ProductCartInterface";
import { CartService } from "src/cart-module/services/cart.service";

@Component({
    selector : 'product-cart',
    templateUrl : './product-cart.component.html'
})
export class ProductCartComponent implements OnInit {
    

    @Input() product : ProductCartInterface
    qty : number
    constructor(private cartService : CartService) {
       
    }
    
    ngOnInit(): void {
       this.qty = this.product.qty 
    }

    deleteProduct() {
        this.cartService.deleteFromCart(this.product.id)
    }

    updateQty() {
        this.cartService.updateQty(this.product.id, this.qty)
    }
}