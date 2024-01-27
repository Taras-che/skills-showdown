import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonesListComponent } from './phones-list.component';

const routes: Routes = [
  { path: '', component: PhonesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PhonesListRoutingModule { }
