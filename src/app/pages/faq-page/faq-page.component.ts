import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  hideNewEntries: boolean = false;
  question: string = '';
  answer: string = '';
  groups: string[]= ['Alle', 'Konfirmanden'];
  group: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  toggleList(index: number) {

  }
}
