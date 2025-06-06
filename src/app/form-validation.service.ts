import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  validateForm(form: { firstName: string; lastName: string; aged: string; gender: string }): boolean {
    return (
      /^[a-zA-Z]+$/.test(form.firstName) &&
      /^[a-zA-Z]+$/.test(form.lastName) &&
      /^[0-9]+$/.test(form.aged) &&
      (form.gender === 'Male' || form.gender === 'Female')
    );
  }
  constructor() { }
}
