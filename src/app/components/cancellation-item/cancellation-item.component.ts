import {Component, Input, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestoreService";
import {CancellationModel} from "../../models/cancellation.model";

@Component({
  selector: 'app-cancellation-item',
  templateUrl: './cancellation-item.component.html',
  styleUrls: ['./cancellation-item.component.css']
})
export class CancellationItemComponent implements OnInit {

  @Input() cancellation!: CancellationModel;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  accept():void {
    this.firestoreService.deleteData("callOffs", this.cancellation.id)
  }
}
