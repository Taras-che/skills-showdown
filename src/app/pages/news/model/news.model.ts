export interface News {
  id: string;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
}
export interface HighlightDirectiveNews extends News {
  title_highlighted?: string;
  description_highlighted?: string;
}
export interface ResponseNewsData {
  count: number;
  next: string;
  previous: null;
  results: News[];
}
