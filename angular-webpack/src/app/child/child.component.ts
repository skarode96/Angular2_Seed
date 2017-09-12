import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  sendToParent: string;
  childVar = 'child var';


  constructor() {
    // Do stuff
  }
  ngOnInit() {
    console.log('Hello Child');
    console.log(this.event);
  }
  handleClickMe() {
    console.log('Inside handleClick');
    this.eventClick.emit(this.sendToParent);
  }
  logFoo() {
    console.log('Hey foooo !');
  }

  changeChildVar() {
    this.childVar = 'new value of child var';
  }
}
