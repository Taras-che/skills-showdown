import { NgModule } from '@angular/core';

import { EnginePartsListComponent } from './engine-parts-list.component';
import { EnginePartsListRoutingModule } from './engine-parts-list-routing.module';

@NgModule({
  imports:[EnginePartsListRoutingModule],
  declarations: [EnginePartsListComponent],
  exports: [EnginePartsListComponent]
})

export class EnginePartsListModule { }
