
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from "@angular/forms";
import { AuthService } from "src/app/user/auth.service";



@Component({

    templateUrl:'user-profile.component.html',
    styles:['error {color:red}']
    
})
export class UserProfile implements OnInit{
 
   profileForm: FormGroup 
   firstName: FormControl;
   lastName: FormControl;

   constructor(private authService:AuthService) {

   }
  ngOnInit(): void {
    
    this.firstName = new FormControl("a", [Validators.required, Validators.pattern("[a-zA-Z].*")]);
    this.lastName = new FormControl("b", Validators.required);
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
    
  }

  validateFirstName() {

    return this.firstName.invalid && this.firstName.touched
  }

  save(values) {
console.log(values);
    this.authService.save(values.firstName,values.lastName,this.authService.currentUser.id).subscribe(data=>{console.log(data)});
  }


}