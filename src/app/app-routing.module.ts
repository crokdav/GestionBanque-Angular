import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddRoleComponent}  from "./add-role/add-role.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListRoleComponent} from "./list-role/list-role.component";
import {ListUserComponent} from "./list-user/list-user.component"
import {AddcompteComponent} from "./addcompte/addcompte.component"
import {AddoperationComponent} from "./addoperation/addoperation.component"
import {ListcomptesComponent} from "./listcomptes/listcomptes.component"
import {ListoperationsComponent} from "./listoperations/listoperations.component"
import {HomeComponent} from "./home/home.component"
import { AuthGuardService } from './services/auth-guard.service';
import {RoleGuardService} from './services/role-guard.service'

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full',
  },
  {
  path :"role",
  component : ListRoleComponent,
  canActivate : [RoleGuardService],
},
{
  path:"user",
  component : ListUserComponent,
  canActivate : [RoleGuardService],
},
{
  path :"addrole",
  component : AddRoleComponent,
  canActivate : [RoleGuardService],
},
{
  path :"adduser",
  component : AddUserComponent,
  
},
{
  path :"operation",
  component : ListoperationsComponent,
  canActivate : [RoleGuardService],

},
{
  path:"compte",
  component : ListcomptesComponent,
  canActivate : [RoleGuardService],
},
{
  path :"addcompte",
  component : AddcompteComponent,
  canActivate : [AuthGuardService],
},
{
  path :"addoperation",
  component : AddoperationComponent,
  canActivate : [AuthGuardService],
},
{
  path:"home",
  component : HomeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
