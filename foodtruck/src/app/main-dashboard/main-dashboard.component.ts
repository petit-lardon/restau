import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirstService } from '../services/first.service'
import {Content} from "../models/contentInterface";

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards2 = [
      { id: 'content', title: 'Content', cols: 2, rows: 1 },
      { id: 'posts', title: 'Post', cols: 2, rows: 1 },
      { title: 'Card 3', cols: 1, rows: 2 },
      { title: 'Card 4', cols: 1, rows: 1 }
  ];

  content: Content[];
  posts: Content[];

  constructor(private firstService: FirstService) {}

  ngOnInit() {
      this.content = this.firstService.getContent();
      this.posts = this.firstService.getPosts();
  }
}
