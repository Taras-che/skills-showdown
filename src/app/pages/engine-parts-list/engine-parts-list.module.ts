import { NgModule } from '@angular/core';
import { EnginePartsListComponent } from './engine-parts-list.component';
import { EnginePartsListRoutingModule } from './engine-parts-list-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CreateHeaderComponent } from '../../shared/dynamic-component/create-header/create-header.component';
@NgModule({
  imports: [EnginePartsListRoutingModule, SharedModule, CreateHeaderComponent],
  declarations: [EnginePartsListComponent],
  exports: [EnginePartsListComponent],
})
export class EnginePartsListModule {
}
