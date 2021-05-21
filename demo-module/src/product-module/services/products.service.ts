import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService {
    products = [
        {id : 1, title : 'product 1', price : 10, description : 'description product 1'},
        {id : 2, title : 'product 2', price : 20, description : 'description product 2'},
        {id : 3, title : 'product 3', price : 30, description : 'description product 3'},
        {id : 4, title : 'product 4', price : 40, description : 'description product 4'},
    ]

    addProduct(product) {
        this.products.push({id : this.products.length+1, ...product})
    }
}