import {Component, Input, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestoreService";
import {LessonModel} from "../../models/lesson.model";

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent implements OnInit {

  @Input() lesson! : LessonModel;

  showModal: boolean =false;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }


  updateLesson(data: LessonModel):void{
    this.firestoreService.updateData('lessons', data, data.id)
  }

  deleteLesson(id: string):void{
    this.firestoreService.deleteData('lessons', id )
  }

}
