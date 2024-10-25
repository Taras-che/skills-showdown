import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User, UserResponse } from './user-list.model';
@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private url = 'https://api.github.com/search/users?q=';
  constructor(public http: HttpClient) {
  }
  //get data and map response for specific prop we need
  getData(userName: string): Observable<Partial<User>[]> {
    return this.http.get<UserResponse>(`${this.url}${userName}`).pipe(
      map((response: UserResponse) =>
        response.items.slice().map((user: User) => {
          return {
            login: user.login,
            id: user.id,
            html_url: user.html_url,
          };
        }),
      ),
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
