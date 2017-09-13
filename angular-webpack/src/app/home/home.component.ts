import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title;
  constructor(private api: ApiService) {
    this.title = this.api.title;
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
