import { NgModule } from '@angular/core';

import { EnginePartsListComponent } from './engine-parts-list.component';
import { EnginePartsListRoutingModule } from './engine-parts-list-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [EnginePartsListRoutingModule, SharedModule],
  declarations: [EnginePartsListComponent],
  exports: [EnginePartsListComponent],
})
export class EnginePartsListModule {}
