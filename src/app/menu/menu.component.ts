import {AuthService} from '../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   constructor(private authService:AuthService) {

   }

   ngOnInit() {
  }

}
