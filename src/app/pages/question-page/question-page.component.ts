import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FirestoreService} from "../../services/firestoreService";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  questions: BehaviorSubject<any> = new BehaviorSubject([])

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getDataFromDatabaseAsStream('tickets', {field: "created_at", orderBy: 'desc'}).subscribe(docs =>{
      this.questions.next(docs)
    })
  }

}
