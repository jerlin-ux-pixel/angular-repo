import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidateInput]'
})
export class ValidateInputDirective {

  @Input('type') inputType!: string ;

  constructor(private el: ElementRef) {}

  @HostListener('input') onInputChange() {
    const value = this.el.nativeElement.value;
    console.log(value ,"value")
    if (this.inputType === 'text' && /^[a-zA-Z]*$/.test(value)) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (this.inputType === 'number' && /^[0-9]*$/.test(value)) {
      this.el.nativeElement.style.borderColor = 'green';
    } else {
      this.el.nativeElement.style.borderColor = 'red';
    }

}}
