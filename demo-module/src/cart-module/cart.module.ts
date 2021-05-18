import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CartComponent } from "./components/cart-component/cart.component";
import { ProductCartComponent } from "./components/product-cart-component/product-cart.component";
import { CartService } from "./services/cart.service";

@NgModule({
    declarations:[CartComponent, ProductCartComponent],
    providers : [CartService],
    exports : [CartComponent],
    imports : [FormsModule, BrowserModule]
})
export class CartModule {

}