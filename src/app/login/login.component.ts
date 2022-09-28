import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Reactive forms validation";
  loginForm = new FormGroup({
   user : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
   email: new FormControl('', [Validators.required, Validators.email]),
   password : new FormControl('',[Validators.required, Validators.minLength(5)])
  })
  loginUser() {
    console.warn(this.loginForm.value)
  }
  get user() {
    return this.loginForm.get('user')
  }
  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }
}
