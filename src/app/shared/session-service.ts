
import { Injectable } from "@angular/core";
import {ISession} from './session'



@Injectable()
export class SessionService  {
  
    sessions: ISession[] = SESSION;
    getSessions(eventId:string) {

       let filteredSessions = new Array<ISession>();
       this.sessions.forEach(element => {
           if(element.eventId === eventId) {
            filteredSessions.push(element);
           }
       });
           
       return filteredSessions;
    }

}


const SESSION : ISession[] = [{
    title:"Basic of Javascript",
    duration:1,
    level: "Novice",
    description: "JavaScript is a cross-platform, object-oriented scripting language used to make webpages",
    eventId: "1"
    }, 
    {title:"Basic of Javascript",
    duration:1,
    level: "Novice",
    description: "JavaScript is a cross-platform, object-oriented scripting language used to make webpages",
    eventId: "1"
    },
    {title:"Basic of Javascript",
    duration:1,
    level: "Novice",
    description: "JavaScript is a cross-platform, object-oriented scripting language used to make webpages",
    eventId: "1"
    }]
