import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Church_place} from "../../models/church_place";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: {} = {};
  @Input() type: string = 'event';
  @Input() action: string = 'create';

  name: string = '';
  place: string =  '';
  church: string = '';
  date: Date = new Date();
  time: number = new Date().getTime()

  headline:string = ''
  subHeadline:string = ''
  text:string = ''
  imgPath: string =''

  minDate: Date;

  churches: Church_place[] = [
    {
      place: "Kissenbrück",
      church: "St. Stephanus"
    },
    {
      place: "Kl. Biewende",
      church: "St. Katharinakirche"
    },
    {
      place: "Gr. Biewende",
      church: "St. Martin"
    }];

  constructor() {
    this.minDate = new Date()
  }

  ngOnInit(): void {
  }


  update() {

  }

  create() {

  }
}
