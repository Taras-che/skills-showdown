import { Pipe, PipeTransform } from '@angular/core';
import { HighlightDirectiveNews } from '../model/news.model';
@Pipe({
  name: 'filterHighlight',
})
export class FilterHighlightPipe implements PipeTransform {
  transform(items: HighlightDirectiveNews[], searchText: string | null): HighlightDirectiveNews[] {
    if (!items || !searchText) {
      return items;
    }
    const regex = new RegExp(`(${searchText})`, 'gi');
    const titleMatchesFirst: HighlightDirectiveNews[] = [];
    const descriptionMatchesOnly: HighlightDirectiveNews[] = [];
    items.forEach((item) => {
      const title_highlighted = item.title.replace(regex, '<span class="highlight">$1</span>');
      const description_highlighted = item.summary.replace(
        regex,
        '<span class="highlight">$1</span>',
      );
      const titleMatches = item.title.toLowerCase().includes(searchText.toLowerCase());
      const descriptionMatches = item.summary.toLowerCase().includes(searchText.toLowerCase());
      if (titleMatches) {
        titleMatchesFirst.push({...item, title_highlighted, description_highlighted});
      } else if (descriptionMatches) {
        descriptionMatchesOnly.push({
          ...item,
          title_highlighted,
          description_highlighted,
        });
      }
    });
    return [...titleMatchesFirst, ...descriptionMatchesOnly];
  }
}
