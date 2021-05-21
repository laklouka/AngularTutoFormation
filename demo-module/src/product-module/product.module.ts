import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommentComponent } from "./components/comment-component/comment.component";
import { ProductComponent } from "./components/product-component/product.component";
import { ProductsComponent } from "./components/products-component/products.component";
import { SpecComponent } from "./components/spec-component/spec.component";
import { ProductsService } from "./services/products.service";


@NgModule({
    declarations:[ProductsComponent, ProductComponent, CommentComponent, SpecComponent],
    imports : [BrowserModule,RouterModule],
    exports : [ProductsComponent, ProductComponent, CommentComponent, SpecComponent],
    providers : []
})
export class ProductModule {

}