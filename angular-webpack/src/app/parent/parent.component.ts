import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  incomingData: Event;
  outgoingData = '';
  textData: string;
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Parent');
  }

  passDataToChild() {
    this.outgoingData = this.textData;
    console.log('passing data to child yoo');
  }

  handleEventClicked(event: Event) {
    this.incomingData = event;
    console.log('received : ', event);
  }
}
