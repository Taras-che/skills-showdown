import { Injectable } from '@angular/core';
import { PhoneListItem } from './phones-list.model';
import { Observable, of, delay } from 'rxjs';
import { generatePhoneList } from './_mock-data';

@Injectable({
  providedIn: 'root'
})
export class PhonesListService {

  getPhoneList(): Observable<PhoneListItem[]> {
    const mockData: PhoneListItem[] = generatePhoneList();

    return of(mockData).pipe(delay(1000));
  }
}
