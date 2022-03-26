import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit(): void 
  {
    
  }
  onSubmit(fn: string | undefined,ln: string | undefined){
    this.employee.firstName = fn;
    this.employee.lastName = ln;
    console.log(this.employee) 
    const data = this.employeeService.loginEmployee(this.employee).subscribe( (data: any) =>{
      if(data == "Status.SUCCESS" )
    {
         this.router.navigate(['/employee']);
    }else{
      window.alert("Login Error")
    }

      console.log("true   "+data);
    },);

    

           
  }

}
