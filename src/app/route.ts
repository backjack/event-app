
import { EventListComponent } from "src/app/event-list/event-list.component";
import { EventDetailComponent } from "src/app/event-detail/event-detail.component";
import {Routes} from '@angular/router'
import { Error404Component } from "src/app/event-detail/error-404.component";
import { EventRouteActivitor } from "src/app/event-detail/event-route-activator.service";
import { MyeventsComponent } from "src/app/myevents/myevents.component";

export const appRoutes:Routes = [

    {path:'events', component :EventListComponent},
    {path:'events/myevents', component :MyeventsComponent},
    {path:'events/:id', canActivate:[EventRouteActivitor], component:EventDetailComponent},
    {path:'', redirectTo:'events', pathMatch:'full'},
    {path:'404',component:Error404Component},
    {path:'user', loadChildren:'./user/user.module#UserModule'}

]