import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {UserProfile}  from './user-profile.component'
import { RouterModule } from '@angular/router'
import {userRoutes} from './user-routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserProfile]
})
export class UserModule { }
