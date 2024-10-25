import { Injectable } from '@angular/core';
import { PhoneListItem } from './phones-list.model';
import { delay, Observable, of } from 'rxjs';
import { generatePhoneList } from './_mock-data';
@Injectable({
  providedIn: 'root',
})
export class PhonesListService {
  getPhoneList(): Observable<PhoneListItem[]> {
    const mockData: PhoneListItem[] = generatePhoneList();
    return of(mockData).pipe(delay(2500));
  }
}
