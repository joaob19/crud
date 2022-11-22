import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {IConfig, NgxMaskModule} from "ngx-mask";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ]
})
export class RegistrationModule { }
