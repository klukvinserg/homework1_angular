import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-item-news',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.scss']
})
export class ItemNewsComponent implements OnInit {

  restList = [];

  constructor(private newsService: NewsService) { }

  @Input () item;

  ngOnInit(): void {
    this.restList = this.newsService.getNews();
    // console.log(this.restList)
   
  }

 

}
