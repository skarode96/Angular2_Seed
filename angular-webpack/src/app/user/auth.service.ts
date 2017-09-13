

import { Injectable } from '@angular/core';

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
}
