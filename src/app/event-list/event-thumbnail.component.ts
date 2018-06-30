import { Component,Input,EventEmitter,Output } from '@angular/core';
import {Event} from '../shared/events';

@Component({
  selector:'event-thumbnail',
  template: `<div [routerLink]="['/events',event.id]"  class="well hoverwell thumbnail"> 
  
  <div>
    <h4>{{event.name | uppercase}}</h4>
    <div> Start Date : {{event.startDate | date}} </div>
    <!--<div [class.green] ="event.price <=5000"> Price : {{event.price | currency:'INR'}} </div>-->

    <div [ngStyle] = "{'color':event.price < 5000?'green':'', 
                         'font-weight':event.price < 5000?'bold':''}"> 
                         Price : {{event.price | currency:'INR'}} </div>
     <!--<div [ngStyle] = "{green:event.price < 5000?, 
                          bold:event.price < 5000}"> Price : {{event.price | currency:'INR'}} </div>-->
    
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
   
</div>`,
styles:[
  ` .thumbnail {min-height:200px;} .green{color: green} .bold{ font-weight: bold;}
   
  
  `
]

})

export class EventThumbnail {

   @Input() event:Event;
   @Output() eventClick = new EventEmitter();

   register() {
      this.eventClick.emit(this.event);
   }

   constructor() {

   }

  
   getClass() {

    if(this.event.price <=5000) {
      return 'green bold'
    }
     
     return ""
   }
}