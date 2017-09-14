

import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class AuthService {

  currentUser: any;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName ,
      firstName: 'Sameer',
      lastName: 'Karode'

    };
  }
  private isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: FormControl | string, lastName: FormControl | string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
