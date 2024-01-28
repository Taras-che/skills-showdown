import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EnginPartListItem } from './engine-parts-list.model';
import { generateEnginPartList } from './_mock-data';

@Injectable({
  providedIn: 'root'
})
export class EnginePartsListService {
  private enginPartsList: BehaviorSubject<EnginPartListItem[]> = new BehaviorSubject<EnginPartListItem[]>([])
  public enginPartsListData$ = this.enginPartsList.asObservable()

  constructor() { }

  getEnginPartsList(): void {
    const mockData: EnginPartListItem[] = generateEnginPartList();
    this.enginPartsList.next(mockData);
  }
}
