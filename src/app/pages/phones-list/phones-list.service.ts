import { Injectable } from '@angular/core';
import { PhoneListItem } from './phones-list.model';
import { BehaviorSubject } from 'rxjs';
import { generatePhoneList } from './_mock-data';

@Injectable({
  providedIn: 'root'
})
export class PhonesListService {
  private enginPartsList = new BehaviorSubject<PhoneListItem[]>([])
  public enginPartsListData$ = this.enginPartsList.asObservable()

  constructor() { }

  getPhoneList(): void {
    const mockData: PhoneListItem[] = generatePhoneList();

    this.enginPartsList.next(mockData);
  }
}
