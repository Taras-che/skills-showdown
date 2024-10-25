import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { FilterHighlightPipe } from './pipes/hightlight_text';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsRoutingModule } from './news.routing.module';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../shared/shared.module';
import { CreateHeaderComponent } from '../../shared/dynamic-component/create-header/create-header.component';
@NgModule({
  imports: [
    NewsRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SharedModule,
    CreateHeaderComponent,
  ],
  declarations: [NewsComponent, FilterHighlightPipe, NewsDetailComponent],
})
export class NewsModule {
}
