import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclamation'
})
export class ExclamationPipe implements PipeTransform {

  transform(value: any, strength: number = 1): any {
    const exclamation = '!'.repeat(strength);
    return `${value}${exclamation}`;
  }

}
