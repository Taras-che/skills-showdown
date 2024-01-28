import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
export type FilterTableModel = {
  columnName: string,
  rowName: string,
  customFilter?: boolean;
  defaultFilter?: boolean;
  filterFn:  NzTableFilterFn<any> | null;
  listOfFilter: NzTableFilterList;
  sortFn: NzTableSortFn<any> | null;
  sortDirections: NzTableSortOrder[];
  filterMultiple: boolean;
}
export type SearchFilterColumnModel = {
  name: string;
}
