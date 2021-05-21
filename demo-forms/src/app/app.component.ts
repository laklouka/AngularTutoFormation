import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() {
    this.userForm= new FormGroup({
      firstName : new FormControl('toto'),
      lastName : new FormControl('tata')
    })
  }

  submitForm() {
    console.log(this.userForm.value)
    console.log(this.userForm.controls.firstName)
  }
}
