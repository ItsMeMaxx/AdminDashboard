import {Component, Input, OnInit} from '@angular/core';
import {AppointmentModel} from "../../models/appointment.model";
import {FirestoreService} from "../../services/firestoreService";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() appointment! : AppointmentModel;

  showModal: boolean =false;
  bgColor: string = ''

  constructor(private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.transformColor()
  }

  transformColor(){
    switch (this.appointment.bgColor){
      case "Blau": this.bgColor = '#1A3145';break;
      case "Gelb": this.bgColor = '#a39228';break;
      case "Gruen": this.bgColor = '#268b2e';break;
    }
  }

  updateAppointment(data: AppointmentModel):void{
    this.firestoreService.updateData('appointments', data, data.id)
  }

  deleteAppointment(id: string):void{
    this.firestoreService.deleteData('appointments', id )
  }
}
