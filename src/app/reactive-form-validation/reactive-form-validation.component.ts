import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormArray} from '@angular/forms';

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
  addHobby() {
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(controls);
  }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup( {
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])


    });

  }
  onSubmit() {
console.log(this.signupForm)

  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

}
