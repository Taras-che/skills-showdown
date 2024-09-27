import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  switchMap,
  takeUntil, tap,
} from 'rxjs';
import { User, userListTableColumns } from './user-list.model';
import { FilterTableColumn } from '../../shared/filter-table/filter-table.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  public userListTableColumns: FilterTableColumn<Partial<User>>[] = userListTableColumns;
  public usersList: Partial<User>[] = [];
  public search: FormControl = new FormControl();
  public isDataLoading: boolean = false;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly userListService: UserListService,) {
  }

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        debounceTime(1250),
        distinctUntilChanged(),
        filter(searchText=> searchText.length > 3),
        tap(() => this.isDataLoading = true),
        switchMap(searchText => this.userListService.getData(searchText)),
        takeUntil(this.unsubscribe$),
      ).subscribe((listOfUsers: Partial<User>[]) => {
      this.usersList = listOfUsers;
      this.isDataLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
