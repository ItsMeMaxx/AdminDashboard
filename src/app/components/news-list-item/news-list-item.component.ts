import {Component, Input, OnInit} from '@angular/core';
import {NewsEntryModel} from "../../models/newsEntry.model";
import {FirestoreService} from "../../services/firestoreService";

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {

  showModal: boolean = false;
  @Input() newsEntry! : NewsEntryModel;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  updateNews(data: NewsEntryModel):void{
    this.firestoreService.updateData('news', data, data.id)
  }

  deleteNews(data: string):void{
    this.firestoreService.deleteData('news', data )
  }

}
