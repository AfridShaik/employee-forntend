import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardGuard } from '../auth-gaurd/auth-guard.guard';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router, private authgaurd: AuthGuardGuard ) { }

  ngOnInit(): void 
  {
    
  }
  onSubmit(fn: string | undefined,ln: string | undefined){

    const data = this.employeeService.loginEmployee(this.employee).subscribe( (data: any) =>{
      if(data == "Status.SUCCESS" )
    {
      this.router.navigate(['/employee']);
      this.authgaurd.canActivate
    }else{
      window.alert("Login Error")
    }

      console.log("true   "+data);
    },);

    

           
  }

}
