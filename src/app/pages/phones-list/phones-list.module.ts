import { NgModule } from '@angular/core';
import { PhonesListComponent } from './phones-list.component';
import { PhonesListRoutingModule } from './phones-list-routing.module';

@NgModule({
  imports: [PhonesListRoutingModule],
  declarations: [PhonesListComponent],
  exports: [PhonesListComponent]
})
export class PhonesListModule { }
