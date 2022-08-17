import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes=[
  {
    path:'employeeDataLazy',
    component:EmployeeDataComponent
  }
]

@NgModule({
  declarations: [
    EmployeeDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyLoadModule {
  constructor(){

  }
 }
