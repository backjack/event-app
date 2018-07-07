import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {DurationPipe}  from './shared/duration-pipe';
import { EventListComponent } from './event-list/event-list.component';
import {EventThumbnail} from './event-list/event-thumbnail.component';
import {EventService}  from './shared/event-service';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { appRoutes} from './route'
import { RouterModule } from '@angular/router';
import {SessionService} from './shared/session-service'
import { SessionDetailComponent } from './event-detail/session-detail/session-detail.component';
import { Error404Component } from 'src/app/event-detail/error-404.component';
import {EventRouteActivitor}  from 'src/app/event-detail/event-route-activator.service'
import { AuthService } from 'src/app/user/auth.service';
import { MyeventsComponent } from './myevents/myevents.component';
import {CollapsableComponent} from './shared/collalpsable-well.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EventListComponent,
    EventThumbnail,
    DurationPipe,
    EventDetailComponent,
    SessionDetailComponent,
    Error404Component,
    MyeventsComponent,
    CollapsableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,SessionService,EventRouteActivitor,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
