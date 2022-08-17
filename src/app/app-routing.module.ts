import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [

  {
    path: '', component: LoginComponent,


  },
  {
    path: 'login', component: LoginComponent,


  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService]
  },
  
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-load/lazy-load.module').then(x => x.LazyLoadModule),
    canActivate: [AuthService]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
