import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

 

  ngOnInit(): void {
  }

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }
    
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( (data: any) =>{
      console.log(data);
      window.alert(`Added employee ${this.employee.firstName} ${this.employee.lastName}`)
      this.goToEmployeeList();
    },
      (    error: any) => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employee']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
