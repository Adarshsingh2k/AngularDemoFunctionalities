import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AuthService } from './services/auth.service';
import { AuthLogicService } from './services/auth-logic.service';
import { EmpServiceService } from './services/emp-service.service';
import { DashboardServiceService } from './services/dashboard-service.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    // EmployeeDataComponent,
    // DashboardServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    
    // ReactiveFormsModule,
    // LazyLoadModule
  ],
  providers: [AuthService,AuthLogicService,EmpServiceService,DashboardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
