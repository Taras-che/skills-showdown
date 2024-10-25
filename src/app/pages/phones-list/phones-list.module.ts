import { NgModule } from '@angular/core';
import { PhonesListComponent } from './phones-list.component';
import { PhonesListRoutingModule } from './phones-list-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CreateHeaderComponent } from '../../shared/dynamic-component/create-header/create-header.component';
@NgModule({
  imports: [PhonesListRoutingModule, SharedModule, CommonModule, CreateHeaderComponent],
  declarations: [PhonesListComponent],
  exports: [PhonesListComponent],
})
export class PhonesListModule {
}
