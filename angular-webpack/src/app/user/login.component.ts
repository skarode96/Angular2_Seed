

import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from "@angular/router";


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router:Router) {

  }
  login(formValues) {

  console.log(formValues);
  this.authService.loginUser(formValues.username, formValues.password);
  this.router.navigate(['event/0']);
  }
  cancel(){
    this.router.navigate(['/home']);
  }
}
