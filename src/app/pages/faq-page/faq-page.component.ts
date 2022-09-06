import {Component, OnInit} from '@angular/core';
import {FirestoreService} from "../../services/firestoreService";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  hideAllList: boolean = true;
  error: boolean = false
  hideConfirmandList: boolean = true;
  question: string = '';
  answer: string = '';
  groups: string[] = ['Alle', 'Konfirmanden'];
  group: string = '';

  faqsAll: BehaviorSubject<any> = new BehaviorSubject([])
  faqsConfirmands: BehaviorSubject<any> = new BehaviorSubject([])

  constructor(private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.firestoreService.getDataFromDatabaseAsStream('faqsAll', {
      field: "created_at",
      orderBy: 'desc'
    }).subscribe(docs => {
      this.faqsAll.next(docs)
    })
    this.firestoreService.getDataFromDatabaseAsStream('faqsConfi', {
      field: "created_at",
      orderBy: 'desc'
    }).subscribe(docs => {
      this.faqsConfirmands.next(docs)
    })
  }

  createFaq(): void {
    this.error = !this.error
    if (!(this.question && this.answer && this.group)) {
      this.error = true
      return
    }
    if (this.group === 'Alle') {
      let data = {
        answer: this.answer,
        question: this.question,
        created_at: new Date(),
        group: "Alle"
      }
      this.firestoreService.createData('faqsAll', data)
      this.resetFields()
    } else {
      let data = {
        answer: this.answer,
        question: this.question,
        created_at: new Date(),
        group: "Konfirmanden"
      }
      this.firestoreService.createData('faqsConfi', data)
      this.resetFields()
    }
  }

  toggleList() {
    this.hideAllList = true
  }

  resetFields() {
    this.answer = ''
    this.question = ''
  }


}


