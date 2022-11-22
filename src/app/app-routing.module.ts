import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./pages/users/users.component";
import {RegistrationComponent} from "./pages/registration/registration.component";

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'registration/:id', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
