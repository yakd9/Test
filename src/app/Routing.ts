 import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import { Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';


export const AppRoutes:Routes=
[
{path:'',component:HomeComponent},
{path:'Home',component:HomeComponent},
{path:'Admin',component:AdminComponent,canActivate:[ActivateGuard]}

]



 