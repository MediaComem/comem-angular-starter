import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors,
         Validator } from '@angular/forms';

import { notInValidator } from './notIn.validator';

@Directive({
  selector: '[notIn]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NotInValidatorDirective,
      multi: true
    }
  ]
})
export class NotInValidatorDirective implements Validator {

  @Input('notIn')
  notIn: string[];
  
  validate(control: AbstractControl): ValidationErrors | null {
    return notInValidator(this.notIn)(control);
  }
}