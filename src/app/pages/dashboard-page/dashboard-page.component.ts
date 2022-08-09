import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  hideChurchService: boolean = true;
  hideNews: boolean = true;
  hideLessons: boolean = true;

  showNewsModal: boolean = false;
  showChurchServiceModal: boolean = false;
  showLessonModal: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleList(index: number) {
    switch (index) {
      case 0:
        this.hideLessons = true;
        this.hideChurchService = true;
        this.hideNews = !this.hideNews;
        break;
      case 1:
        this.hideLessons = true;
        this.hideNews = true;
        this.hideChurchService = !this.hideChurchService;
        break;
      case 2:
        this.hideNews = true;
        this.hideChurchService = true;
        this.hideLessons = !this.hideLessons;
        break;
    }
  }
}
