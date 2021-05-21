import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/product-module/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  productForm:FormGroup
  constructor(private builder:FormBuilder, private productService:ProductsService, private router:Router) { 
    

  }

  ngOnInit(): void {
    this.productForm = this.builder.group({
      title : new FormControl('', [Validators.required]),
      price : new FormControl(0, [Validators.required]),
      description : new FormControl('', [Validators.required]),
    })
  }

  submitProduct() {
      if(this.productForm.valid){
        this.productService.addProduct(this.productForm.value)
        this.router.navigate(['/'])
      }
      else {
        alert("Merci de remplir notre formulaire")
      }
  }

}
