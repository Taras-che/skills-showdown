import { NgModule } from '@angular/core';
import { PhonesListComponent } from './phones-list.component';
import { PhonesListRoutingModule } from './phones-list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [PhonesListRoutingModule, SharedModule],
  declarations: [PhonesListComponent],
  exports: [PhonesListComponent]
})
export class PhonesListModule { }
