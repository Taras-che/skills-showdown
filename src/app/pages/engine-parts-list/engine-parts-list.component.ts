import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EnginPartListItem } from './engine-parts-list.model';
import { EnginePartsListService } from './engine-parts-list.service';
import { enginTableColumns } from './_mock-data';
import { FilterTableModel } from '../shared/filter-table/filter-table.model';
import { FilterTableComponent } from '../shared/filter-table/filter-table.component';
import { PhoneListItem } from '../phones-list/phones-list.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-engine-parts-list',
  templateUrl: './engine-parts-list.component.html',
})
export class EnginePartsListComponent extends FilterTableComponent<PhoneListItem> implements OnInit, OnDestroy {
  public enginPartsList: EnginPartListItem[] = []
  public enginTableColumns: FilterTableModel[] = enginTableColumns;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly enginService: EnginePartsListService, fb: FormBuilder) {
    super(fb)
  }

   override ngOnInit() {
     this.initData()
     this.enginService.getEnginPartsList();
  }

  private initData(): void {
    this.enginService.enginPartsListData$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (enginPartList: EnginPartListItem[]) => this.enginPartsList = enginPartList,
      error: (error: Error) => console.error('Error fetching engin parts:', error)
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
