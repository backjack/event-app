import {Event} from 'src/app/shared/events';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event-service';
import {ActivatedRoute}  from '@angular/router'
import { SessionService } from 'src/app/shared/session-service';
import { ISession } from 'src/app/shared/session';
import { AuthService } from 'src/app/user/auth.service';
import { MyeventsService } from 'src/app/shared/myevents.service';

declare let toastr;

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {


  event: Event;
  sessions : ISession[];
  isDisabled :boolean =true;
  action:string
  constructor(private eventService: EventService, private route:ActivatedRoute, 
    private sessionService: SessionService, private authService:AuthService,
  private myeventService:MyeventsService) {

    this.action ="Register"
   }

  ngOnInit() {

    this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
    this.sessions = this.sessionService.getSessions(this.route.snapshot.params['id']);
    
    if(this.authService.currentUser!== undefined) {
      let userEvents = this.myeventService.getMyEvents(this.authService.currentUser.id);
      if(userEvents.find(userEvent => userEvent.id === this.event.id)) {

        this.action ="View";
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    }
  
  }


  register() {

    this.myeventService.addEvent(this.authService.currentUser.id, this.event);
    toastr.success("Successfully Registered for ",this.event.name);
    this.isDisabled = true;
    this.action ="Registered Successfully"
  }
}
