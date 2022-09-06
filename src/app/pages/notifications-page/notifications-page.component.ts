import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../../services/firestoreService";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {

  groups: string[] = ["Alle", "Konfirmanden"]
  group: string = ''
  notification: string = '';
  minDate: Date = new Date();
  deletedAt: Date = new Date();
  error: boolean = false;

  notifications: BehaviorSubject<any> = new BehaviorSubject([])

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getDataFromDatabaseAsStream('notifications').subscribe(docs =>{
      this.notifications.next(docs)
    })
  }

  createNotification():void {
    this.error = false
    if(!(this.notification && this.group)){
      this.error = true
      return
    }
    let data = {
      title : this.notification,
      group : this.group,
      delete_at : this.deletedAt,
      created_at: new Date()
    }

    this.firestoreService.createData('notifications', data)
    this.notification = ''
  }


}
