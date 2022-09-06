import {Component, Input, OnInit} from '@angular/core';
import {FaqModel} from "../../models/faq.model";
import {FirestoreService} from "../../services/firestoreService";

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {

  @Input() faq!: FaqModel

  edit: boolean = false

  constructor(private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.faq.group === 'Alle') {
      let data = {
        answer: this.faq.answer,
        question: this.faq.question,
        created_at: new Date(),
        group: "Alle"
      }

      this.firestoreService.updateData('faqsAll', data, this.faq.id)
    } else {
      let data = {
        answer: this.faq.answer,
        question: this.faq.question,
        created_at: new Date(),
        group: "Konfirmanden"
      }

      this.firestoreService.updateData('faqsConfi', data, this.faq.id)
    }
  }

  delete(): void {
    if (this.faq.group === 'Alle') {
      this.firestoreService.deleteData('faqsAll', this.faq.id)
    } else {
      this.firestoreService.deleteData('faqsConfi', this.faq.id)
    }
  }
}
