import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ReactiveFormValidationComponent } from "./reactive-form-validation/reactive-form-validation.component";
import { TemplateFormValidationComponent } from "./template-form-validation/template-form-validation.component";

const appRoutes: Routes = [
  { path: 'reactive-form-validation', component: ReactiveFormValidationComponent},
  { path: 'template-driven-form-validation', component: TemplateFormValidationComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
