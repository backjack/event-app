import { Component, OnInit } from '@angular/core';
import { MyeventsService } from 'src/app/shared/myevents.service';
import { AuthService } from 'src/app/user/auth.service';
import { Event} from '../shared/events';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {

  events:Event[];
  constructor(private myService:MyeventsService, private auth:AuthService) { 

  }

  ngOnInit() {
    this.events = this.myService.getMyEvents(this.auth.currentUser.id);
  }

}
