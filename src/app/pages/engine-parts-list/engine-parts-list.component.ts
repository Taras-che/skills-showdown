import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EnginPart } from './engine-parts-list.model';
import { EnginePartsListService } from './engine-parts-list.service';
import { enginTableColumns } from './_mock-data';
import { FilterTableModel } from '../shared/filter-table/filter-table.model';

@Component({
  selector: 'app-engine-parts-list',
  templateUrl: './engine-parts-list.component.html',
})
export class EnginePartsListComponent implements OnInit, OnDestroy {
  public enginPartsList: EnginPart[] = []
  public enginTableColumns: FilterTableModel[] = enginTableColumns;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor( private readonly enginService: EnginePartsListService) {
  }

   ngOnInit() {
    this.enginService.getEnginPartsList();
    this.initData()
  }
  initData(): void {
    this.enginService.enginPartsListData$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (enginPartList: EnginPart[]) => this.enginPartsList = enginPartList,
      error: (error: Error) => console.error('Error fetching engin parts:', error)
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
