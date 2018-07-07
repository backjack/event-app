import { Injectable } from '@angular/core';
import { IUser } from 'src/app/user/IUser';

@Injectable()
export class AuthService {

  currentUser: IUser
  
  constructor() { 

   
  }

  login(userName:string,password:string) {
    console.log(userName);
    console.log(password);
    this.currentUser = {
      id:"nsharm49",
      firstName :"Neeraj",
      lastName :"Sharma",
      password  :"Neeraj"
     }
  }
  
  isAuthenticated() {

    if(this.currentUser!== undefined) {
      return false;
    }
    return true;
  }
}
