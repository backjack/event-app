
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from "@angular/forms";



@Component({

    templateUrl:'user-profile.component.html',
    styles:['error {color:red}']
    
})
export class UserProfile implements OnInit{
 
   profileForm: FormGroup 
   firstName: FormControl;
   lastName: FormControl;

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


}