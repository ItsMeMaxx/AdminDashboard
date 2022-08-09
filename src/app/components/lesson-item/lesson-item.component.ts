import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent implements OnInit {

  showModal: boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

}
