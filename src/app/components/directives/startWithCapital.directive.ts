import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function startsWithCapitalValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const valid = /^[A-Z]/.test(control.value);

    return valid ? null : { startsWithCapital: { value: control.value } };
  };
}

@Directive({
  selector: '[startsWithCapital]',
  providers: [
    {
      provide: NG_VALIDATORS, //
      useExisting: StartsWithCapitalValidatorDirective,
      multi: true, //agrega el validador a todos los validators pre-existentes
    },
  ],
})
export class StartsWithCapitalValidatorDirective implements Validator {
  @Input('startsWithCapital') isActive: boolean = true;

  validate(control: AbstractControl): ValidationErrors | null {
    return !this.isActive ? null : startsWithCapitalValidator()(control);
  }
}
