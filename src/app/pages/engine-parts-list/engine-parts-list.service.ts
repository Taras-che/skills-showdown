import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { EnginPartListItem } from './engine-parts-list.model';
import { generateEnginPartList } from './_mock-data';
@Injectable({
  providedIn: 'root',
})
export class EnginePartsListService {
  constructor() {
  }
  getEnginPartsList(): Observable<EnginPartListItem[]> {
    const mockData: EnginPartListItem[] = generateEnginPartList();
    return of(mockData).pipe(delay(2000));
  }
}
