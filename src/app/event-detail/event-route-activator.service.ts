import { Injectable } from "@angular/core";
import {CanActivate} from '@angular/router';
import { ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "src/app/shared/event-service";
import { Router } from "@angular/router";

@Injectable()
export class EventRouteActivitor implements CanActivate{
    
    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
  
        const eventExists = !!this.eventService.getEvent(route.params['id']);

        if(!eventExists) {

            this.router.navigate(["/404"]);
        }

        return eventExists;

    }


}