import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsService } from '../services/news.service';
import { Subject, takeUntil } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { News } from '../model/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  public news$: Subject<News> = new Subject<News>();
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly newsService: NewsService,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.newsService.getNewsById(params['id'])),
        takeUntil(this.unsubscribe$),
      )
      .subscribe((value) => this.news$.next(value));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
