import {Component, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestoreService";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  hideChurchService: boolean = true;
  hideNews: boolean = true;
  hideLessons: boolean = true;

  showNewsModal: boolean = false;
  showChurchServiceModal: boolean = false;
  showLessonModal: boolean = false;

  news: BehaviorSubject<any> = new BehaviorSubject([])
  appointments: BehaviorSubject<any> = new BehaviorSubject([])
  lessons: BehaviorSubject<any> = new BehaviorSubject([])

  constructor(private angularFirestore: AngularFirestore, private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.firestoreService.getDataFromDatabaseAsStream('news', {field: 'created_at', orderBy: 'desc'}).subscribe(docs => {
      this.news.next(docs)
    })
    this.firestoreService.getDataFromDatabaseAsStream('appointments', {field: 'time', orderBy: 'desc'}).subscribe(docs => {
      this.appointments.next(docs)
    })
    this.firestoreService.getDataFromDatabaseAsStream('lessons', {field: 'created_at', orderBy: 'desc'}).subscribe(docs => {
      this.lessons.next(docs)
    })
  }



  toggleList(index: number):void {
    switch (index) {
      case 0:
        this.hideLessons = true;
        this.hideChurchService = true;
        this.hideNews = !this.hideNews;
        break;
      case 1:
        this.hideLessons = true;
        this.hideNews = true;
        this.hideChurchService = !this.hideChurchService;
        break;
      case 2:
        this.hideNews = true;
        this.hideChurchService = true;
        this.hideLessons = !this.hideLessons;
        break;
    }
  }

  createNews(data: {}):void{
    this.firestoreService.createData('news', data)
  }

  createAppointment(data: {}):void{
    this.firestoreService.createData('appointments', data)
  }

  createLesson(data: {}):void{
    this.firestoreService.createData('lessons', data)
  }

}
