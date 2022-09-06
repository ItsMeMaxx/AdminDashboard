import {Component, Input, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestoreService";
import {QuestionModel} from "../../models/question.model";

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  @Input() question!: QuestionModel

  answer: string = ''

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  save() {
    this.firestoreService.updateDeepData('users', 'tickets', {title : this.answer, answered_at: new Date()}, this.question.uid, this.question.id);
    this.firestoreService.deleteData('tickets', this.question.id);
  }
}
