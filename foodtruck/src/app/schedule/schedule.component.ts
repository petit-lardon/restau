import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/index";
import {debounceTime, map } from "rxjs/operators";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;

  constructor() { }

  ngOnInit() {
    this.searchTerms$
        .pipe(debounceTime(2000), map(x => x.toUpperCase()))
        .subscribe(data => console.log(data));
  }

}
