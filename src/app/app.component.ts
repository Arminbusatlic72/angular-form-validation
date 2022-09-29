import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form-validations';
  searchText: String = '';
  @ViewChild('form') signupForm!:NgForm;
  loginUser(value:String) {console.log(value)}
  onSearchTextEntered(searchValue: String) {
    this.searchText = searchValue;
    console.log(this.searchText)

  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value.email)

  // }
  onSubmit() {
    console.log(this.signupForm)
  }
}
