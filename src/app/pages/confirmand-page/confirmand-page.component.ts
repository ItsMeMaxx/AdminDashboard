import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmand-page',
  templateUrl: './confirmand-page.component.html',
  styleUrls: ['./confirmand-page.component.css']
})
export class ConfirmandPageComponent implements OnInit {
  hideNewEntries: boolean = true;
  hideCancellations: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
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
