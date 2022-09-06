import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Church_place} from "../../models/church_place.model";
import {NewsEntryModel} from "../../models/newsEntry.model";
import {AppointmentModel} from "../../models/appointment.model";
import firebase from "firebase/compat/app";
import Timestamp = firebase.firestore.Timestamp;
import {LessonModel} from "../../models/lesson.model";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() createNews: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteNews: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateNews: EventEmitter<any> = new EventEmitter<any>();

  @Output() createAppointment: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteAppointment: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateAppointment: EventEmitter<any> = new EventEmitter<any>();

  @Output() createLesson: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteLesson: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateLesson: EventEmitter<any> = new EventEmitter<any>();

  @Input() news!: NewsEntryModel;
  @Input() appointment!: AppointmentModel;
  @Input() lesson!: LessonModel;

  @Input() type: string = 'event';
  @Input() action: string = 'create';

  name: string = '';
  place: string = '';
  church: string = '';
  date: Date = new Date();
  time: string = ''
  end: string = ''

  headline: string = '';
  subHeadline: string = '';
  text: string = ''
  imgPath: string = '';

  minDate: Date;
  error: boolean = false;

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
    if (this.action == 'update') {
      switch (this.type) {
        case 'news':
          this.inputNews();
          break;
        case 'event':
          this.inputAppointments();
          break;
        case 'lesson':
          this.inputLesson();
          break;
      }
    }
  }

  inputAppointments(): void {
    this.name = this.appointment.title
    this.place = this.appointment.municipality
    this.church = this.appointment.place
    this.date = this.appointment.time.toDate()
    this.time = this.appointment.time.toDate().getTime().toString()
  }

  inputNews(): void {
    this.headline = this.news.title
    this.subHeadline = this.news.subTitle
    this.text = this.news.text
    this.imgPath = this.news.imgPath
  }

  inputLesson(): void {
    this.name = this.lesson.title
    this.place = this.lesson.place
    this.date = this.lesson.date.toDate()
    this.time = this.lesson.date.toDate().getTime().toString()
    this.end = this.lesson.end.toDate().getTime().toString()
  }

  update(): void {
    switch (this.type) {
      case 'news':
        if (!(this.headline && this.text)) {
          return
        }
        let news: NewsEntryModel = {
          id: this.news.id,
          title: this.headline,
          subTitle: this.subHeadline,
          text: this.text,
          imgPath: this.imgPath,
          created_at: new Date()
        }
        this.updateNews.emit(news)
        break;

      case 'event':
        if (!(this.name && this.time && this.church)) {
          return
        }
        let event: AppointmentModel = {
          bgColor: 'Blau',
          title: this.name,
          place: this.church,
          created_at: new Date(),
          id: this.appointment.id,
          municipality: "Dreifaltigkeitsgemeinde Kissenbrück-Biewende",
          time: Timestamp.fromDate(this.formDate(this.time))
        }
        this.updateAppointment.emit(event)
        break;

      case 'lesson':
        if (!(this.name && this.time && this.place)) {
          return
        }
        let lesson: LessonModel = {
          callOff: [],
          title: this.name,
          place: this.place,
          created_at: new Date(),
          id: this.lesson.id,
          date: Timestamp.fromDate(this.formDate(this.time)),
          end: Timestamp.fromDate(this.formDate(this.end))
        }
        this.updateLesson.emit(lesson)
        break;
    }
    this.closeModal.emit(false)
  }

  create(): void {
    switch (this.type) {
      case 'news':
        if (!(this.headline && this.text)) {
          return
        }
        let news = {
          title: this.headline,
          subTitle: this.subHeadline,
          text: this.text,
          imgPath: this.imgPath,
          created_at: new Date()
        }
        this.createNews.emit(news)
        break;

      case 'event':
        if (!(this.name && this.church && this.time)) {
          this.error = true
          return
        }
        let event = {
          bgColor: 'Blau',
          title: this.name,
          place: this.church,
          created_at: new Date(),
          municipality: "Dreifaltigkeitsgemeinde Kissenbrück-Biewende",
          time: Timestamp.fromDate(this.formDate(this.time))
        }
        this.createAppointment.emit(event);
        break;
      case 'lesson':
        if (!(this.name && this.place && this.time)) {
          this.error = true
          return
        }
        let lesson = {
          callOff: [],
          title: this.name,
          place: this.place,
          created_at: new Date(),
          municipality: "Dreifaltigkeitsgemeinde Kissenbrück-Biewende",
          date: Timestamp.fromDate(this.formDate(this.time)),
          end: Timestamp.fromDate(this.formDate(this.end)),
        }
        this.createLesson.emit(lesson);
        break;
    }
    this.closeModal.emit(false)
  }

  delete(): void {
    switch (this.type) {
      case 'news':
        this.deleteNews.emit(this.news.id);
        break;
      case 'event':
        this.deleteAppointment.emit(this.appointment.id);
        break;
      case 'lesson':
        this.deleteLesson.emit(this.lesson.id);
        break;
    }
  }

  formDate(timeInput: string): Date {
    let time = timeInput.split(":")
    return new Date(this.date.getFullYear(), this.date.getUTCMonth() , this.date.getDate(), Number(time[0]), Number(time[1]))
  }

}
