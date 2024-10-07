import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnginePartsListComponent } from './engine-parts-list.component';

const routes: Routes = [{ path: '', component: EnginePartsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnginePartsListRoutingModule {}
