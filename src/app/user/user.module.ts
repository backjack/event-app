import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {UserProfile}  from './user-profile.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component'
import {userRoutes} from './user-routes'
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [UserProfile,LoginComponent]
})
export class UserModule { }
