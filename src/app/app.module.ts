import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UsersModule} from "./pages/users/users.module";
import {RegistrationModule} from "./pages/registration/registration.module";
import {ToolbarModule} from "./components/toolbar/toolbar.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    RegistrationModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
