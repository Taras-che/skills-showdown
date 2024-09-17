import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from './services/news.service';
import { News } from './model/news.model';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  public displayItems$: Observable<News[]> = this.newsService.getNews();

  public searchForm: FormGroup;

  constructor(private readonly newsService: NewsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }
}
