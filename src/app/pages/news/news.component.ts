import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from './services/news.service';
import { News } from './model/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public displayItems$: Observable<News[]> = this.newsService.getNews();
  searchText$: Observable<string>;
  public searchForm: FormGroup;

  constructor(
    private readonly newsService: NewsService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [''],
    });

    this.searchText$ = this.searchForm
      .get('search')
      ?.valueChanges.pipe(debounceTime(500)) as Observable<string>;
  }
}
