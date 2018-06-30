import { Injectable } from '@angular/core';
import { IUser } from 'src/app/user/IUser';

@Injectable()
export class AuthService {

  currentUser: IUser
  
  constructor() { 

    this.currentUser = {
      id:"nsharm49",
      firstName :"Neeraj",
      lastName :"Sharma",
      password  :"Neeraj"
     }
  }
}
