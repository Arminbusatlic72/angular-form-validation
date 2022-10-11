import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-validation',
  templateUrl: './template-form-validation.component.html',
  styleUrls: ['./template-form-validation.component.css']
})
export class TemplateFormValidationComponent implements OnInit {
  name: string = "Template driven form validation"
  searchText: String = '';
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  user = {
    username: '',
    email: '',
    gender: ''
  }
  submit: boolean = false
  @ViewChild('formReference') signupForm!:NgForm;
  @ViewChild('userData') userData!:string
  @ViewChild('formReference2') signupFormSecond!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value.email)

  // }
  suggestedUserName() {
    const suggestedUsername ="Armando"
  //   this.signupForm.setValue(
  //     { questionsAndAnswers: "",
  //     radio: "",
  //     select: "pet", userData:{
  //       email: "",
  //       username:suggestedUsername
  // }})
  this.signupForm.form.patchValue({
    userData: {
      username: suggestedUsername
    }
  })
  }

  onSubmit() {
  this.submit = true
  this.user.username = this.signupForm.value.userData.username
  this.user.email = this.signupForm.value.userData.email
  this.user.gender = this.signupForm.value.radio
  this.signupForm.reset()
  console.log(this.user)
  }
  onSubmitSecond() {
    console.log(this.signupFormSecond.value)
  }

}
