import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export type FilterTableColumn<T> = {
  title: string;
  property: keyof T;
  searchable?: boolean;
  defaultFilter?: boolean;
  filterFn:  NzTableFilterFn<any> | null;
  listOfFilter: NzTableFilterList;
  sortFn: NzTableSortFn<any> | null;
  sortDirections: NzTableSortOrder[];
  filterMultiple: boolean;
}
