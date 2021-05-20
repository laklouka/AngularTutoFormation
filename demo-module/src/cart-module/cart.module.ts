import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { ProductsService } from "src/product-module/services/products.service";
import { CartComponent } from "./components/cart-component/cart.component";
import { ProductCartComponent } from "./components/product-cart-component/product-cart.component";
import { CartService } from "./services/cart.service";

const routes : Routes = [
    {path : '', component : CartComponent},
    {path : ':id', component : CartComponent},
]

@NgModule({
    declarations:[CartComponent, ProductCartComponent],
    providers : [CartService, ProductsService],
    exports : [CartComponent],
    imports : [FormsModule, CommonModule, RouterModule.forChild(routes)]
})
export class CartModule {

}