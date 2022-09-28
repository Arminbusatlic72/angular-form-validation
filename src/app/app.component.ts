import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-validations';
  searchText: String = '';
  loginUser(value:String) {console.log(value)}
  onSearchTextEntered(searchValue: String) {
    this.searchText = searchValue;
    console.log(this.searchText)

  }
}
