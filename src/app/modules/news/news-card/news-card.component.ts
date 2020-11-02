import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})

export class NewsCardComponent implements OnInit {

 currentId: number;
 currentNews: any;

  constructor(private activateRoute: ActivatedRoute, private newsService: NewsService) { 
    this.currentId = +this.activateRoute.snapshot.params.id;
    this.currentNews = this.newsService.getNewsById(this.currentId);
  }

  ngOnInit(): void {
  }
}
