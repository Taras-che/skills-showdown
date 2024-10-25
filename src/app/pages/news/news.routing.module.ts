import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'article/:id', component: NewsDetailComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {
}
