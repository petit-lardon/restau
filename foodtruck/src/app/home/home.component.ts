import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img = 'assets/images/piza-3010062_1920.jpg';
  constructor() { }

  ngOnInit() {
  }

}
