import { Injectable } from '@angular/core';
import { IUser } from 'src/app/user/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class AuthService {

  currentUser: IUser
  
  constructor(private httpCLient: HttpClient) { 

   
  }

  login(userName:string,password:string) {
    
      return this.httpCLient.get('services/user/login/'+userName+'/'+password)
      .pipe(tap(data=> {
        if(data[0]!== undefined) {
        this.currentUser = {
          id:data[0]["userId"],
          firstName:data[0]["firstName"],
          lastName:data[0]["lastName"],
          password:null
        }}}));
  }

  save(firstName:string,lastName:string,userId:string) {

    let user ={firstName:firstName,lastName:lastName,userId:userId};
    console.log("-------------------------------------");
    console.log(user);
    console.log("-------------------------------------");
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpCLient.post('services/user/profile/save',user,{ headers: headers} );/*.pipe(tap(data=>{
       this.currentUser.firstName = firstName;
       this.currentUser.lastName = lastName;
    }));*/
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
