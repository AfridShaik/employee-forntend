  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {LocalStorageService} from 'ngx-webstorage'; 
import { AuthGuardService } from '../service/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthGuardService]
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router, private localstorage:LocalStorageService ) { }

  ngOnInit(): void 
  {
    
  }
  onSubmit(fn: string | undefined,ln: string | undefined){

    const data = this.employeeService.loginEmployee(this.employee).subscribe( (data: any) =>{
      if(data == "Status.SUCCESS" ){
        this.localstorage.store('user',data) 
      this.router.navigate(['/employee']);
    }else{
      window.alert("Login Error")
    }

      console.log("true   "+data);
    },);

    

           
  }

}
