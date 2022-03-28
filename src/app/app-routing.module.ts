import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-gaurd/auth-guard.guard';

const routes: Routes = [
  {path : 'employee', component: EmployeeListComponent},
  {path : 'login', component: LoginComponent},
  {path : 'create-employee', component: CreateEmployeeComponent,canActivate:[AuthGuardGuard]},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'update-employee/:id', component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
