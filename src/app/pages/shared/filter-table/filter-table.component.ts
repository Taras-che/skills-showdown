import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterTableColumn } from './filter-table.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent<T> implements OnChanges {
  public searchValue: string = '';
  public visible: boolean = false;
  public searchForm: FormGroup;

  @Input() tableData: T[] = [];
  @Input() tableColumns: FilterTableColumn<T>[] = [];
  @Input() isDataLoading: boolean;
  public listOfDisplayData: T[] = [];

  constructor(public fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchValue: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tableData'] && changes['tableData'].currentValue !== undefined) {
      this.listOfDisplayData = this.tableData;
    }
  }

  public onSearch(columnName: any): void {
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
