import { Injectable } from "@angular/core";
import { ProductCartInterface } from "../interfaces/ProductCartInterface";

@Injectable()
export class CartService {
    products : Array<ProductCartInterface> = new  Array<ProductCartInterface>()

    constructor() {
        this.products.push({id : 1, title : 'produit 1', price : 10, qty : 4})
        this.products.push({id : 2, title : 'produit 3', price : 330, qty : 1})
        this.products.push({id : 3, title : 'produit 2', price : 20, qty : 1})
    }

    deleteFromCart(id:number) : void {
        this.products.splice(this.products.findIndex( p=> p.id == id) ,1)
    }

    updateQty(id:number, qty:number) : void {
        for(let p of this.products) {
            if(p.id == id) {
                p.qty = qty
                break
            }
        }
    }
}