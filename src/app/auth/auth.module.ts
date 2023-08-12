import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {BackenderrormessagesComponent} from "./backenderrormessages/backenderrormessages.component";



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    BackenderrormessagesComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule { }
