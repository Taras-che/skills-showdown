import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EnginPart } from './engine-parts-list.model';
import { generateEnginPartList } from './_mock-data';

@Injectable({
  providedIn: 'root'
})
export class EnginePartsListService {
  private enginPartsList: BehaviorSubject<EnginPart[]> = new BehaviorSubject<EnginPart[]>([])
  public enginPartsListData$ = this.enginPartsList.asObservable()

  constructor() { }

  getEnginPartsList(): void {
    const mockData: EnginPart[] = generateEnginPartList();
    this.enginPartsList.next(mockData);
  }
}
