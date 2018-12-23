import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centsToDollar'
})
export class CentsToDollarPipe implements PipeTransform {
  newValue: number;

  transform(value: any, args?: any): any {
    if (typeof(value) === 'string') {
      this.newValue = parseInt(value) / 100;
    } else {
      this.newValue = value / 100;
    }

    return this.newValue;
  }

}
