import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';




@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {

  restList = [];

  constructor(private newsService: NewsService) { }

  // listNews = [
  //   {id: 1, title: "Title 1", description: "some long text", author: "Tom Cuk", date: "2020-10-22T17:50:33.223Z"},
  //   {id: 2, title: "Title 2", description: "some lonlonglonglongg text", author: "Tom Cuk1", date: "2020-10-22T17:50:33.223Z"},
  //   {id: 3, title: "Title 3", description: "some long longlonglonglong", author: "Tom Cuk2", date: "2020-10-22T17:50:33.223Z"},
  //   {id: 4, title: "Title 4", description: "somtexttexttexttexte long text", author: "Tom Cuk3", date: "2020-10-22T17:50:33.223Z"},
  //   {id: 5, title: "Title 5", description: "some ltexttexttextong text", author: "Tom Cuk4", date: "2020-10-22T17:50:33.223Z"},
  //   {id: 6, title: "Title 6", description: "some long text", author: "Tom Cuk5", date: "2020-10-22T17:50:33.223Z"},
  //   {id: 7, title: "Title 7", description: "somtexttexttexte long text", author: "Tom Cuk6", date: "2020-10-22T17:50:33.223Z"},
  //   {id: 8, title: "Title 8", description: "solonglonglongme long text", author: "Tom Cuk7", date: "2020-10-22T17:50:33.223Z"},
  // ];

  ngOnInit(): void {
    this.restList = this.newsService.getNews();
   }
}


