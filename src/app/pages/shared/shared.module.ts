import { NgModule } from '@angular/core';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterTableComponent],
  exports: [FilterTableComponent],
})
export class SharedModule { }
