

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventService {
  private events: any;

  constructor() {
    this.events = [
      { id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10am',
        location: {address: '1 London Road ', city: 'London', country: 'England'},
        format: 'InPerson'
      },
      {id: 2, name: 'ng-conf 2037', date: '4/15/2037', time: '9am', onlineUrl: 'https://www.ng-conf.org/', format: 'Online'},
      {id: 3, name: 'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8am', format: 'Online'},
      {
        id: 4,
        name: 'UN Angular Summit',
        date: '6/10/2037',
        time: '8am',
        location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'},
        format: 'InPerson'
      }
    ];
  }

  addEvents(event: any) {
    this.events.push(event);
  }
  getLastEventNumber() {
    return this.events.length;
  }
  getDummyEvent(){
    return {
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'},
      format: 'InPerson'
    };
  }
  getEvents() {
    return this.events;
  }

  getEventsAsynchronously() {
    let subject = new Subject();
    setTimeout(() => {
      subject.next(this.getEvents());
      subject.complete();
    }, 2000);
    return subject;
  }
}
