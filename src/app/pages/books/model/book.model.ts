import { FormControl } from '@angular/forms';

export interface BookFormControl {
  id: FormControl<number | null>;
  title: FormControl<string | null>;
  author: FormControl<string | null>;
  year: FormControl<number | null>;
  description: FormControl<string | null>;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
}
export enum BookMode {
  edit = 'edit',
  add = 'add',
}
