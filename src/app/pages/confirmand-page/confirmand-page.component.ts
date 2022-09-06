import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../../services/firestoreService";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-confirmand-page',
  templateUrl: './confirmand-page.component.html',
  styleUrls: ['./confirmand-page.component.css']
})
export class ConfirmandPageComponent implements OnInit {
  hideNewEntries: boolean = true;
  hideCancellations: boolean = true;


  cancellations: BehaviorSubject<any> = new BehaviorSubject([])
  churchEntries: BehaviorSubject<any> = new BehaviorSubject([])

  constructor(private angularFirestore: AngularFirestore,private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.firestoreService.getDataFromDatabaseAsStream('churchServices', {field: 'time', orderBy: 'desc'}).subscribe(docs => {
      this.churchEntries.next(docs)
    })
    this.firestoreService.getDataFromDatabaseAsStream('callOffs').subscribe(docs => {
      this.cancellations.next(docs)
    })

  }

  toggleList(index: number) {
    switch (index) {
      case 0:
        this.hideCancellations = true;
        this.hideNewEntries = !this.hideNewEntries;
        break;
      case 1:
        this.hideNewEntries = true;
        this.hideCancellations = !this.hideCancellations;
        break;
    }
  }
}
