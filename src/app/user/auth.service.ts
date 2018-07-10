import { Injectable } from '@angular/core';
import { IUser } from 'src/app/user/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  currentUser: IUser
  
  constructor(private httpCLient: HttpClient) { 

   
  }

  login(userName:string,password:string) {
    
      return this.httpCLient.get('services/user/login/'+userName+'/'+password);
  }
  
  setUser(currentUser:IUser) {
    this.currentUser = currentUser;
  }
  isAuthenticated() {

    if(this.currentUser!== undefined) {
      return false;
    }
    return true;
  }
}
