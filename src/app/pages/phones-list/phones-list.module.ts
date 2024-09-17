import { NgModule } from '@angular/core';
import { PhonesListComponent } from './phones-list.component';
import { PhonesListRoutingModule } from './phones-list-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [PhonesListRoutingModule, SharedModule, CommonModule],
  declarations: [PhonesListComponent],
  exports: [PhonesListComponent]
})
export class PhonesListModule { }
