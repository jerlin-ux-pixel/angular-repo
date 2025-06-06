import { Component, OnInit } from '@angular/core';
import { FormValidationService } from '../form-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form = {
    firstName: '',
    lastName: '',
    aged: '',
    gender: ''
  };
  showSubmit = false;

  constructor(private formValidationService: FormValidationService) {}

  onInputChange() {
    console.log("I am called")
    this.showSubmit = this.formValidationService.validateForm(this.form);
  }
  

  ngOnInit(): void {
  }

}
