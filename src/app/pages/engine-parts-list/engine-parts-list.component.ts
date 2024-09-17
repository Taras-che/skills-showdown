import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EnginPartListItem } from './engine-parts-list.model';
import { EnginePartsListService } from './engine-parts-list.service';
import { enginTableColumns } from './_mock-data';
import { FilterTableColumn } from '../../shared/filter-table/filter-table.model';

@Component({
  selector: 'app-engine-parts-list',
  templateUrl: './engine-parts-list.component.html',
})
export class EnginePartsListComponent implements OnInit, OnDestroy {
  public enginPartsList: EnginPartListItem[] = []
  public enginTableColumns: FilterTableColumn<EnginPartListItem>[] = enginTableColumns;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly enginService: EnginePartsListService) {
  }

  ngOnInit(): void {
     this.initData()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initData(): void {
    this.enginService.getEnginPartsList().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (enginPartList: EnginPartListItem[]) => this.enginPartsList = enginPartList,
      error: (error: Error) => console.error('Error fetching engin parts:', error)
    })
  }
}
