import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhoneListModel } from './phones-list.model';
import { Subject, takeUntil } from 'rxjs';
import { phoneTableColumns } from './_mock-data';
import { FilterTableModel } from '../shared/filter-table/filter-table.model';
import { PhonesListService } from './phones-list.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
})
export class PhonesListComponent implements OnInit, OnDestroy {
  public phonesList: PhoneListModel[]= [];
  public phoneTableColumns: FilterTableModel[] = phoneTableColumns;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly phoneListService: PhonesListService) {
  }

  ngOnInit() {
    this.initData();
    this.phoneListService.getPhoneList();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initData(): void {
    this.phoneListService.enginPartsListData$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (phoneList: PhoneListModel[]) => this.phonesList = phoneList,
      error: (error) => console.error('Error fetching engin parts:', error)
    })
  }


}
