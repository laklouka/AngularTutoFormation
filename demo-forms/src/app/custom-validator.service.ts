import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class CustomValidator {
  // customMax(input : FormControl) {
  //     return input.value.length >=3 ? null : {customMaxLength : true}
  //   }
  customMax(taille: number) {
    return function(input:FormControl) {
        return input.value.length >= taille ? null : { customMaxLength: true };
    }
  }
}
