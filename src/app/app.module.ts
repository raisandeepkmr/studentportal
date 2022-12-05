import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadCompComponent } from './head-comp/head-comp.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { AuthCompComponent } from './auth-comp/auth-comp.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeadCompComponent,
    LoginCompComponent,
    RegisterCompComponent,
    MainCompComponent,
    AuthCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
