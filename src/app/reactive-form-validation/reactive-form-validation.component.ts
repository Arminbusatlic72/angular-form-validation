import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {
  name: string = "Reactive form validation"
  genders: string[] = ['male', 'female']
  signupForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'gender' : new FormControl('male'),


    });
  }
  onSubmit() {
    console.log(this.signupForm)
  }

}
