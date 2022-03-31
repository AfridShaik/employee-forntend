import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthGuardService } from '../service/auth-guard.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthGuardService]
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private employeeService: EmployeeService,
    private router: Router, private localstorage: LocalStorageService) { }

  ngOnInit(): void {

  }
  onSubmit(fn: string | undefined, ln: string | undefined) {
    this.localstorage.clear('user')
    console.log("entered the login")
    this.employeeService.loginEmployee(this.user).subscribe((data: any) => {
      if (data == "Status.SUCCESS") {
        this.localstorage.store('user', data)
        this.router.navigate(['/employee']);
        this.localstorage.clear('user')
      } else {
        window.alert("Login Error")
      }

      console.log("true   " + data);
    });
  }
}
