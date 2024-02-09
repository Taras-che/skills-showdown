import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchFilterColumnModel } from './filter-table.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnChanges {
  public searchValue: string = '';
  public visible: boolean = false;
  public searchForm: FormGroup;

  @Input() tableData: any[] = [];
  @Input() tableColumns: SearchFilterColumnModel[] = [];
  public listOfDisplayData: any[] = [];
  public isDataLoaded$: Subject<boolean> = new Subject()

  constructor(public fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchValue: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tableData'] && changes['tableData'].currentValue !== undefined) {
      this.listOfDisplayData = this.tableData;
      this.isDataLoaded$.next(true)
    }
  }

  public onSearch(columnName: string): void {
    const searchValue = this.searchForm.get('searchValue')?.value
      .toLowerCase()
      .trim()
      .replaceAll(' ', '');

    this.listOfDisplayData = this.tableData.filter((item: any) => item[columnName]
      .toLowerCase()
      .trim()
      .replaceAll(' ', '')
      .includes(searchValue));
  }
}
