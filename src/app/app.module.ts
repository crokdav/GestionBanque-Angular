import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule}  from '@angular/forms'
import {RouterModule,Routes } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListoperationsComponent } from './listoperations/listoperations.component';
import { ListcomptesComponent } from './listcomptes/listcomptes.component';
import { AddcompteComponent } from './addcompte/addcompte.component';
import { AddoperationComponent } from './addoperation/addoperation.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OperationClientComponent } from './operation-client/operation-client.component';
import { InfoClientComponent } from './info-client/info-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRoleComponent,
    ListUserComponent,
    AddRoleComponent,
    AddUserComponent,
    ListoperationsComponent,
    ListcomptesComponent,
    AddcompteComponent,
    AddoperationComponent,
    HeaderComponent,
    HomeComponent,
    OperationClientComponent,
    InfoClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
