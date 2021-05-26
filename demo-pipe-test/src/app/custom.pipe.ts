import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args[0] == 'F'){
      return 'Mme '+value
    } else if(args[0] ==  'M') {
      return 'M.' +value
    }
    else {
      return value
    }
    
  }

}
