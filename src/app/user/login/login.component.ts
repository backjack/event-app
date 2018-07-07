import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService,private router:Router) {

  }

  login(val) {
    this.authService.login(val.username, val.password);
    this.router.navigate(["events"]);
  }

  
  ngOnInit() {
  }

}
