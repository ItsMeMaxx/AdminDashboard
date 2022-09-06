import {Component, Input, OnInit} from '@angular/core';
import {NotificationModel} from "../../models/notification.model";
import {FirestoreService} from "../../services/firestoreService";

@Component({
  selector: 'app-noticication-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})
export class NotificationItemComponent implements OnInit {

  @Input() notification!: NotificationModel

  groups: string[] = ["Alle", "Konfirmanden"]
  edit: boolean =false
  minDate: Date = new Date();

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  delete() {
    this.firestoreService.deleteData('notifications', this.notification.id)
  }

  save() {
    let data = {
      title: this.notification.title,
      group: this.notification.group,
      delete_at: this.notification.delete_at,
    }

    this.firestoreService.updateData('notifications', data, this.notification.id)

  }
}
