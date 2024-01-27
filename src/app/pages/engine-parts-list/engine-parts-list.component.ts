import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EnginPart } from './engine-parts-list.model';
import { EnginePartsListService } from './engine-parts-list.service';

@Component({
  selector: 'app-engine-parts-list',
  templateUrl: './engine-parts-list.component.html',
})
export class EnginePartsListComponent implements OnInit, OnDestroy {
  public enginPartsList: EnginPart[] = []
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor( private readonly enginService: EnginePartsListService) {
  }

  ngOnInit() {
    this.enginService.enginPartsListData$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (enginPartList: EnginPart[]) => this.enginPartsList = enginPartList,
      error: (error: Error) => console.error('Error fetching engin parts:', error)
    })
    this.enginService.getEnginPartsList();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
