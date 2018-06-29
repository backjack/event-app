import {Injectable} from '@angular/core'
import {Event} from './events'

@Injectable()
export class EventService {
  
    events:Event[] = EVENTS;

    getEvents() :Event[] {
        return this.events;
    }

   getEvent(id:string)  {
     return this.events.find(event => event.id === id );
   }
}

const EVENTS :Event[]= [{
    id:"1",
    name: "Angular 4",
    startDate: new Date('09-20-2018'),
    imgUrl: "assets/angular-logo.png",
    professor:"Steve Hook",
    price: 5800,
    duration: 1,
    location:{
      "address" :"14, Sector 10",
      "city" :"Navi Mumbai"
    }
  },
  {
    id:"2",
    name: "Java 8",
    startDate: new Date('02-10-2018'),
    imgUrl: "assets/java.png",
    professor:"Steve Hook",
    price: 11000,
    duration: 3,
    location:{
      "address" :"14, Sector 10",
      "city" :"Navi Mumbai"
    }
  },
  {
    id:"3",
    name: "Introduction to Javascript",
    startDate: new Date('05-20-2018'),
    imgUrl: "assets/javascript.png",
    professor:"David Crockford",
    price: 2300,
    duration: 4,
    location:{
      "address" :"14, Sector 26",
      "city": "Noida"
    }
  },
  {
    id:"4",
    name: "Mongodb for Begineers",
    startDate: new Date('06-18-2018'),
    imgUrl: "assets/mongo-db-logo.png",
    professor:"Aston Kucher",
    price: 18800,
    duration: 1,
    online:"https://www.udemy.com"
  },
  {
    id:"5",
    name: "Hadoop Introduction",
    startDate: new Date('01-12-2018'),
    imgUrl: "string",
    professor:"Aston Kucher",
    price: 5800,
    duration: 2,
    location:{
      "address" :"14, Sector 10",
      "city" :"Mumbai"
    }
  }
];