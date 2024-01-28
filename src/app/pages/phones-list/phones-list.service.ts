import { Injectable } from '@angular/core';
import { PhoneListModel } from './phones-list.model';
import { BehaviorSubject } from 'rxjs';
import { generatePhoneList } from './_mock-data';

@Injectable({
  providedIn: 'root'
})
export class PhonesListService {
  private enginPartsList = new BehaviorSubject<PhoneListModel[]>([])
  public enginPartsListData$ = this.enginPartsList.asObservable()

  constructor() { }

  getPhoneList(): void {
    const mockData: PhoneListModel[] = generatePhoneList();

    this.enginPartsList.next(mockData);
  }
}
