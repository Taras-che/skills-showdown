import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhoneListItem } from './phones-list.model';
import { Subject, takeUntil } from 'rxjs';
import { phoneTableColumns } from './_mock-data';
import { FilterTableColumn } from '../shared/filter-table/filter-table.model';
import { PhonesListService } from './phones-list.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
})
export class PhonesListComponent implements OnInit, OnDestroy {
  public phonesList: PhoneListItem[]= [];
  public phoneTableColumns: FilterTableColumn<PhoneListItem>[] = phoneTableColumns;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly phoneListService: PhonesListService) {
  }
   ngOnInit() {
    this.initData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initData(): void {
    this.phoneListService.getPhoneList().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (phoneList: PhoneListItem[]) => this.phonesList = phoneList,
      error: (error) => console.error('Error fetching engin parts:', error)
    });
  }
}
