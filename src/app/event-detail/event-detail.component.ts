import {Event} from 'src/app/shared/events';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event-service';
import {ActivatedRoute}  from '@angular/router'
import { SessionService } from 'src/app/shared/session-service';
import { ISession } from 'src/app/shared/session';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  sessions : ISession[];
  constructor(private eventService: EventService, private route:ActivatedRoute, 
    private sessionService: SessionService) { }

  ngOnInit() {

    this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
    this.sessions = this.sessionService.getSessions(this.route.snapshot.params['id']);
  }

}
