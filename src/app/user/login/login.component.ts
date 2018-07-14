import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   isLoginFailed: boolean;

  constructor(private authService: AuthService,private router:Router) {
   
  }

  login(val) {
    this.authService.login(val.userName, val.password).subscribe((data:Array<any>)=>{
        if(data.length>0) {
           this.successLogin();
       } else {
          this.loginFailed();
       }
     });

  }

  successLogin = function() {
    this.router.navigate(["events"]);
    this.isLoginFailed = false;
  }
  
  loginFailed = function() {
    this.isLoginFailed = true;
  }


  ngOnInit() {
  }

}
