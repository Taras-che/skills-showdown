import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News, ResponseNewsData } from '../model/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl: string = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=50';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<ResponseNewsData>(this.apiUrl).pipe(map((data) => data.results));
  }
  getNewsById(id: string): Observable<News> {
    return this.http.get<News>(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`);
  }
}
