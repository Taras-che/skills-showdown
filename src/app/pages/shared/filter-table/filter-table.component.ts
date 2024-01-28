import { Component, Input } from '@angular/core';
import { FilterTableModel, SearchFilterColumnModel } from './filter-table.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent<T extends SearchFilterColumnModel> {
  public searchValue: string = '';
  public visible: boolean = false;
  public searchForm: FormGroup;

  @Input() tableData: T[] = [];
  @Input() tableColumns: FilterTableModel[] = [];
  public listOfDisplayData: any[] = [];


  constructor(public fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchValue: ['']
    });
  }
  ngOnInit() {
    this.listOfDisplayData = this.tableData
  }

  onSearch(): void {
    const searchValue = this.searchForm.get('searchValue')?.value.toLowerCase();
    this.listOfDisplayData = this.tableData.filter((item: T) => item.name.toLowerCase().includes(searchValue));
  }
}
