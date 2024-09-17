import { Pipe, PipeTransform } from '@angular/core';
import { HighlightDirectiveNews } from '../model/news.model';
import { delay, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'filterHighlight'
})
export class FilterHighlightPipe implements PipeTransform {
  transform(items: HighlightDirectiveNews[], searchText: string): Observable<HighlightDirectiveNews[]> {
    if (!items || !searchText) {
      return of(items);
    }

    const regex = new RegExp(`(${searchText})`, 'gi');

    return of(items).pipe(
      delay(1500),
      map(items => {
        const titleMatchesFirst: HighlightDirectiveNews[] = [];
        const descriptionMatchesOnly: HighlightDirectiveNews[] = [];

        items.forEach(item => {
          const title_highlighted = item.title.replace(regex, '<span class="highlight">$1</span>');
          const description_highlighted = item.summary.replace(regex, '<span class="highlight">$1</span>');

          const titleMatches = item.title.toLowerCase().includes(searchText.toLowerCase());
          const descriptionMatches = item.summary.toLowerCase().includes(searchText.toLowerCase());

          if (titleMatches) {
            titleMatchesFirst.push({ ...item, title_highlighted, description_highlighted });
          } else if (descriptionMatches) {
            descriptionMatchesOnly.push({ ...item, title_highlighted, description_highlighted });
          }
        });

        return [...titleMatchesFirst, ...descriptionMatchesOnly];
      })
    );
  }
}
