import { Component,Input,EventEmitter,Output } from '@angular/core';
import {Event} from '../shared/events';

@Component({
  selector:'event-thumbnail',
  template: `<div [routerLink]="['/events',event.id]"  class="well hoverwell thumbnail"> 
  
  <div class="caption">
    <h4>{{event.name | uppercase}}</h4>
    <div> Start Date : {{event.startDate | date}} </div>
    <div> Price : {{event.price | currency:'INR'}} </div>
    <div> Duration : {{event.duration | duration}} </div>
    <div> By : {{event.professor}} </div>
    <div *ngIf='event?.location'>
     <span>Location: {{event.location.address}} </span>
     <span>{{event.location.city}}</span>
     </div>
    <div *ngIf ='event?.online'>
     <span> URL : {{event.online}} </span>
    </div>
    
    <p><br>
    <button class="btn btn-primary" (click)="register()">Register</button></p>
</div>`,
styles:[
  ` .thumbnail {min-height:200px;}
  `
]

})

export class EventThumbnail {

   @Input() event:Event;
   @Output() eventClick = new EventEmitter();

   register() {
      this.eventClick.emit(this.event);
   }
}