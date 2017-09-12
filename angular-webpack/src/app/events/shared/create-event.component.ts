

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-create-event',
  template: `
    <h1> New Event </h1>
    <hr>
    <div class="col-md-6">
      <h3>[create event form will go here]</h3>
      <br/>
      <br/>
      <button type="submit" class="btn-primary">save</button>
      <button type="button" class="btn-default" (click)="cancel()">Cancel</button>
    </div>
  
  `
})
export class CreateEventComponent  implements OnInit {
  isDirty = false;
  constructor(private  router: Router) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Inside Create-Event');
  }
  cancel() {
    console.log('cancel clicked');
    this.router.navigate(['/event/0']);
  }
}
