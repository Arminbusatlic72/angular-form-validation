import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    TemplateFormValidationComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
