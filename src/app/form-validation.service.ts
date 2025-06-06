import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  validateForm(form: { firstName: string; lastName: string; age: string; gender: string }): boolean {
    return (
      /^[a-zA-Z]+$/.test(form.firstName) &&
      /^[a-zA-Z]+$/.test(form.lastName) &&
      /^[0-9]+$/.test(form.age) &&
      (form.gender === 'Male' || form.gender === 'Female')
    );
  }
  constructor() { }
}
