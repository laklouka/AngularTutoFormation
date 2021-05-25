import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/product-module/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  productForm:FormGroup
  editProductId:number = undefined
  constructor(private builder:FormBuilder, private productService:ProductsService, private router:Router, private route:ActivatedRoute) { 
    

  }

  ngOnInit(): void {
    this.productForm = this.builder.group({
      title : new FormControl('', [Validators.required]),
      price : new FormControl(0, [Validators.required]),
      description : new FormControl('', [Validators.required]),
    })
    this.route.params.subscribe((pars) => {
      const id = pars["id"]
      if(id != undefined) {
        const product = this.productService.products.find(e => e.id == id)
        if(product!= undefined) {
          this.productForm.setValue({
            title : product.title,
            description : product.description,
            price : product.price
          })
          this.editProductId = id
        }
      }
    })
  }

  submitProduct() {
      if(this.productForm.valid){
        if(this.editProductId == undefined) {
          this.productService.addProduct(this.productForm.value)
        }
        else {
          this.productService.updateProduct(this.productForm.value, this.editProductId)
          this.editProductId = undefined
        }
        this.router.navigate(['/'])
      }
      else {
        alert("Merci de remplir notre formulaire")
      }
  }

}
