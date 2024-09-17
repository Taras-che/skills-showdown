import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
@NgModule({
  imports: [UserListRoutingModule, CommonModule, SharedModule, NzInputModule, FormsModule, ReactiveFormsModule, NzFormModule, NzInputNumberModule],
  declarations: [UserListComponent]
})
export class UserListModule { }
