import { NgModule } from '@angular/core';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule
  ],
  declarations: [FilterTableComponent],
  exports: [FilterTableComponent],
})
export class SharedModule { }
