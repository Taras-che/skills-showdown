import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/engine-parts'},
  {
    path: 'engine-parts',
    loadChildren: () =>
      import('./pages/engine-parts-list/engine-parts-list.module').then(
        (m) => m.EnginePartsListModule,
      ),
  },
  {
    path: 'phones',
    loadChildren: () =>
      import('./pages/phones-list/phones-list.module').then((m) => m.PhonesListModule),
  },
  {
    path: 'git-users',
    loadChildren: () => import('./pages/user-list/user-list.module').then((m) => m.UserListModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'book-list',
    loadComponent: () =>
      import('./pages/books/book-list/book-list.component').then((c) => c.BookListComponent),
  },
  {
    path: 'component-creation',
    loadComponent: () =>
      import('./pages/components-creation/components-creation.component').then(
        (c) => c.ComponentsCreationComponent,
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
