

import { EventService } from './shared/event.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventsListComponent implements OnInit {
  private actualEvents: any[];
  private events: any[];
  private id: number;
  // private event: any;

  constructor(private eventService: EventService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private activatedRoute: ActivatedRoute) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
    // this.eventService.getEventsAsynchronously().subscribe(events => {
    //   this.actualEvents = events;
    //   this.events = events;
    // });
    // this.actualEvents = this.eventService.getEvents();
    this.actualEvents = this.activatedRoute.snapshot.data['events'];
    this.events = this.actualEvents
    this.activatedRoute.params.subscribe(params => {
      this.id = params[ 'id' ];
      this.events = this.actualEvents;
      console.log(this.events);
      if (this.id > 0) {
        this.events = [this.events[(this.id) - 1]];
      }
    });
  }

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    console.log(this.toastr.info);
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }
}
