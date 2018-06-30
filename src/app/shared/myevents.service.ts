import { Injectable } from '@angular/core';
import { Event } from 'src/app/shared/events';

@Injectable({
  providedIn: 'root'
})
export class MyeventsService {

  myEvents:Event[]
  constructor() { 
    this.myEvents = [];
  }

  getMyEvents(userId:string) {
    return this.myEvents;
  }

  addEvent(userId: string, event:Event) {
    this.myEvents.push(event);
  }
}
