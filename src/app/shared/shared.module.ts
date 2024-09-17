import { NgModule } from '@angular/core';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSpinModule,
    MatProgressSpinnerModule
  ],
  declarations: [FilterTableComponent, LoaderComponent],
  exports: [FilterTableComponent, LoaderComponent],
})
export class SharedModule { }
