

import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mouseoverLogin: Boolean;

  constructor(private authService: AuthService, private router: Router) {

  }
  login(formValues) {

  console.log(formValues);
  this.authService.loginUser(formValues.username, formValues.password);
  this.router.navigate(['event/0']);
  }

  login1(loginForm) {
    console.log(loginForm.controls.username.touched);
    console.log(loginForm.controls.username.untouched);
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
