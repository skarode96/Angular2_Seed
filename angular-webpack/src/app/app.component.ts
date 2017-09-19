import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import {AuthService} from "./user/auth.service";
import { EventService } from './events/shared/event.service';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;
  events: any;

  constructor( private auth: AuthService, private eventService: EventService ) {
    this.events = eventService.getEvents();
  }
}
