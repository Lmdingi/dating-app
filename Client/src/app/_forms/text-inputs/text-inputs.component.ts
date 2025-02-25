import { NgIf } from '@angular/common';
import { Component, input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-inputs',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './text-inputs.component.html',
  styleUrl: './text-inputs.component.css',
})
export class TextInputsComponent implements ControlValueAccessor {
  label = input<string>('');
  type = input<string>('text');

  constructor(@Self() public ngControl:NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  get control():FormControl {
    return this.ngControl.control as FormControl;
  }
}
