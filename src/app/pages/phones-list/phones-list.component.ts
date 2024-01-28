import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhoneListItem } from './phones-list.model';
import { Subject, takeUntil } from 'rxjs';
import { phoneTableColumns } from './_mock-data';
import { FilterTableModel } from '../shared/filter-table/filter-table.model';
import { PhonesListService } from './phones-list.service';
import { FilterTableComponent } from '../shared/filter-table/filter-table.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
})
export class PhonesListComponent extends FilterTableComponent<PhoneListItem> implements OnInit, OnDestroy {
  public phonesList: PhoneListItem[]= [];
  public phoneTableColumns: FilterTableModel[] = phoneTableColumns;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly phoneListService: PhonesListService, fb: FormBuilder) {
    super(fb)
  }
  override ngOnInit() {
    this.initData();
    this.phoneListService.getPhoneList();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initData(): void {
    this.phoneListService.enginPartsListData$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (phoneList: PhoneListItem[]) => this.phonesList = phoneList,
      error: (error) => console.error('Error fetching engin parts:', error)
    })
  }


}
