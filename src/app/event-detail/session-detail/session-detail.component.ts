
import { Component, OnInit,Input } from '@angular/core';
import { SessionService } from 'src/app/shared/session-service';
import { ISession } from 'src/app/shared/session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  @Input() session:ISession
  constructor() {
    
   }

  ngOnInit() {

  }

}
