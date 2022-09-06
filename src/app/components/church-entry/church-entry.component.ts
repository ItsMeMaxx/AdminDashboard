import {Component, Input, OnInit} from '@angular/core';
import {ChurchEntryModel} from "../../models/churchEntry.model";
import {FirestoreService} from "../../services/firestoreService";

@Component({
  selector: 'app-church-entry',
  templateUrl: './church-entry.component.html',
  styleUrls: ['./church-entry.component.css']
})
export class ChurchEntryComponent implements OnInit {

  @Input() churchEntry! : ChurchEntryModel

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  accept(): void {
    this.firestoreService.deleteData('churchServices', this.churchEntry.id )
    this.firestoreService.updateDeepData('users', 'churchServices', {status : "accepted"}, this.churchEntry.userId, this.churchEntry.serviceId)
  }

  deny():void {
    this.firestoreService.deleteData('churchServices', this.churchEntry.id )
    this.firestoreService.updateDeepData('users', 'churchServices', {status : "denied"}, this.churchEntry.userId, this.churchEntry.serviceId)
  }
}
