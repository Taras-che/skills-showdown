import { Component, Input } from '@angular/core';
import { SearchFilterColumnModel } from './filter-table.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent {
  public searchValue: string = '';
  public visible: boolean = false;
  public searchForm: FormGroup;

  @Input() tableData: any[] = [];
  @Input() tableColumns: SearchFilterColumnModel[] = [];
  public listOfDisplayData: any[] = [];

  constructor(public fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchValue: ['']
    });
  }
  ngOnInit() {
    this.listOfDisplayData = this.tableData;
  }

  onSearch(columnName: string): void {
    const searchValue = this.searchForm.get('searchValue')?.value.toLowerCase().trim().replaceAll(' ', '');

    this.listOfDisplayData = this.tableData.filter((item: any) => item[columnName]
      .toLowerCase()
      .trim()
      .replaceAll(' ', '')
      .includes(searchValue));
  }
}
