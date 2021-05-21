import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // firstName:string
  // lastName:string
  // result : string
  // submitForm(form) {
  //   console.log(form)
  //   this.result = form.firstName.value + " "+form.lastName.value     
  // }


  userForm : FormGroup

  constructor(private builder:FormBuilder, private customValidator:CustomValidator) {
    // this.userForm= new FormGroup({
    //   firstName : new FormControl('toto'),
    //   lastName : new FormControl('tata')
    // })
    this.userForm = this.builder.group({
      firstName : new FormControl('',[Validators.required, this.customValidator.customMax(4)]),
      lastName : new FormControl('', [Validators.required])
    })
  }

  submitForm() {
    console.log(this.userForm.controls.firstName)
    console.log(this.userForm.controls.firstName.hasError("maxLength"))
  }
  
  
  
}

