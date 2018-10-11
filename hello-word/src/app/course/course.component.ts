import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CoursesComponent implements OnInit {
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    this.isFavorite = !this.isFavorite;
  }
}
