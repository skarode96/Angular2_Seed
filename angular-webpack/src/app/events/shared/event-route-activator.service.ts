


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {


  constructor(private eventService: EventService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

    let events = this.eventService.getEvents();
    let selectedId = route.params['id'];
    let eventExist = false;
    this.eventService.getEvents().forEach((item) => {
      console.log(selectedId);
      if (selectedId == 0 || item.id == selectedId) {
        console.log('found');
        eventExist = true;
      }
    });
    console.log('event exist val', eventExist);
    if (!eventExist) {
      this.router.navigate(['/error']);
    }
    return eventExist;

  }



}
