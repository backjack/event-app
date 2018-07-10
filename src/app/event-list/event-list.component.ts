import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event-service';
import { Event } from '../shared/events';
import { OnChanges } from '@angular/core';

declare let toastr;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];
  _filteredString :string ='';
  sortBy: string = "startDate";
  constructor(private service: EventService) {
    this.events = new Array<Event>();
  }

  get filteredString() :string{
    return this._filteredString;
  }

  set filteredString(val:string) {
    
    this._filteredString = val;
    console.log(val);
    this.events.filter(event=> event.name.toLocaleLowerCase().indexOf(val) !== -1 );
  }

  handleSelect(data) {
    this.sortBy = data;
    this.sortEvents();
  }

  ngOnInit() {
    this.service.getEvents().subscribe(
      (data:Array<any>) =>{
        
              data.forEach(elem => {
        
                let event : Event= {
                  id: elem['eventId'],
                  name: elem['name'],
                  price: elem['price'],
                  duration: elem['duration'],
                  startDate :elem['startDate'],
                  professor :elem['professor'],
                  online :elem['online'],
                  imgUrl :null,
                  location : {
                    address : elem['address'],
                    city: elem['city']
                  }
                }
                 console.log(elem);
                 this.events.push(event);
              });
            
            });
    this.sortEvents();
  }


  sortEvents() {

    switch (this.sortBy) {

      case 'startDate':
        this.events.sort((e1, e2) => {

          if (e1.startDate > e2.startDate) {
            return -1
          } else if (e1.startDate === e2.startDate) {
            return 0;
          }
          else {
            return 1;
          }
        });
        break;
      case 'price':
        this.events.sort((e1, e2) => {
          if (e1.price > e2.price) {
            return -1
          } else if (e1.price === e2.price) {
            return 0;
          }
          else {
            return 1;
          }

        });
        break;


    }
  }
  handleClick(name) {
    toastr.success(name +" registered successfully");
  }
}
