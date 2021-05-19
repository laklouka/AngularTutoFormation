import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ProductComponent } from "./components/product-component/product.component";
import { ProductsComponent } from "./components/products-component/products.component";
import { ProductsService } from "./services/products.service";


@NgModule({
    declarations:[ProductsComponent, ProductComponent],
    imports : [BrowserModule,RouterModule],
    exports : [ProductsComponent, ProductComponent],
    providers : [ProductsService]
})
export class ProductModule {

}