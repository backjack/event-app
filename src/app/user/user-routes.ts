
import { UserProfile } from "src/app/user/user-profile.component";
import {Routes} from '@angular/router'
import { LoginComponent } from "src/app/user/login/login.component";


export const userRoutes:Routes =[
    {path : "profile", component :UserProfile},
    {path : "login", component :LoginComponent}
]