import {Component} from "@angular/core"
import { ProductInterface } from "src/product-module/interfaces/ProductInterface"
import { ProductsService } from "src/product-module/services/products.service"


@Component({
    selector : 'products',
    templateUrl : './products.component.html'
})
export class ProductsComponent {
    products : Array<ProductInterface> = new Array<ProductInterface>()

    constructor(private productService:ProductsService) {
        this.products = this.productService.products
    }
}