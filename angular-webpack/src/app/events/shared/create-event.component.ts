

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './event.service';
@Component({
  selector: 'my-create-event',
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent  implements OnInit {
  isDirty = true;
  event: any;

  constructor(private  router: Router, private eventService: EventService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Inside Create-Event');
    this.event = this.eventService.getDummyEvent();
  }
  cancel() {
    console.log('cancel clicked');
    this.router.navigate(['/event/0']);
  }
  saveEvent(formValues) {

    console.log(formValues);
    let event = {
      id: (this.eventService.getLastEventNumber() + 1),
      name: formValues.name,
      date: formValues.date,
      time: formValues.time,
      location: {address: formValues.address, city: formValues.city, country: formValues.country},
      format: 'Online'
    }
    this.eventService.addEvents(event);
    this.router.navigate(['event/0']);
  }
}
