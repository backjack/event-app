import {Injectable} from '@angular/core'
import {Event} from './events'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class EventService {
  
    events:Event[] = new Array<Event>();

    constructor(private httpClient: HttpClient) {
      this.httpClient.get("/services/events").subscribe(
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
    }


    getEvents() {
        
         return this.httpClient.get("/services/events");
    }

   getEvent(id:string)  {
     console.log(this.events);
     return this.events.find(event => event.id === id );
   }
}

