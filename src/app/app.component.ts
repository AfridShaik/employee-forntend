import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from './employee';
import {EmployeeService} from './employee.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-frontend';

  constructor(private employeeService: EmployeeService){}

  
  ngOnInit() {
    // this.getEmployees();
  }

  // public getEmployees(): void {
  //   this.employeeService.getEmployeesList().subscribe(
  //     (response: Employee[]) => {
  //       this.employees = response;
  //       console.log(this.employees);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }




// public searchEmployees(key: string): void {
//   console.log(key);
//   declare const results : Employee[] = [] ;
//   for (const employee of this.employees) {
//     if (employee.id.toLowerCase().indexOf(key.toLowerCase()) !== -1
//     || employee.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
//     || employee.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
//     || employee.emailId.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
//       results.push(employee);
//     }
//   }
//   this.employees =   const results: any[];
//   if (results.length === 0 || !key) {
//     this.employeeService.getEmployeesList();
//   }
// }





}




