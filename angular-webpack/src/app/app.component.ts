import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import {AuthService} from "./user/auth.service";

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(private api: ApiService, private auth: AuthService) {
    this.title = this.api.title;
  }
}
