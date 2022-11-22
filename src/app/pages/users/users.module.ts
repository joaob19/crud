import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ConfirmationDialogModule} from "../../components/confirmation-dialog/confirmation-dialog.module";
import {IConfig, NgxMaskModule} from "ngx-mask";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ConfirmationDialogModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
})
export class UsersModule { }
