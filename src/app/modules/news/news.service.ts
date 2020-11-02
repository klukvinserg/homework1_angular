import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  listNews = [
    {id: 1, title: "Title 1", description: "some long text", author: "Tom Cuk", date: "2020-10-22"},
    {id: 2, title: "Title 2", description: "some lonlonglonglongg text", author: "Tom Cuk1", date: "2020-10-22"},
    {id: 3, title: "Title 3", description: "some long longlonglonglong", author: "Tom Cuk2", date: "2020-10-22"},
    {id: 4, title: "Title 4", description: "somtexttexttexttexte long text", author: "Tom Cuk3", date: "2020-10-22"},
    {id: 5, title: "Title 5", description: "some ltexttexttextong text", author: "Tom Cuk4", date: "2020-10-22"},
    {id: 6, title: "Title 6", description: "some long text", author: "Tom Cuk5", date: "2020-10-22"},
    {id: 7, title: "Title 7", description: "somtexttexttexte long text", author: "Tom Cuk6", date: "2020-10-22"},
    {id: 8, title: "Title 8", description: "solonglonglongme long text", author: "Tom Cuk7", date: "2020-10-22"},
  ];

  selected;

  getNews() {
    return this.listNews;
  }

  getNewsById(id: number) {
    this.selected = this.listNews.find(item => item.id === id)
    return this.selected;
  }
}
