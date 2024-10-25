import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Book, BookFormControl, BookMode } from '../model/book.model';
import { DialogResponse } from '../../../shared/confirm-dialog/confirm-dialog.model';
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  public form!: FormGroup<BookFormControl>;
  public mode: BookMode.add | BookMode.edit;
  public BookMode = BookMode;
  constructor(
    private fb: FormBuilder,
    private readonly bookService: BookService,
    private dialogRef: MatDialogRef<BookFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: BookMode.add | BookMode.edit; book: Book; bookId: number },
  ) {
    this.mode = data.mode;
    const isEditMode = data.mode === BookMode.edit;
    this.form = this.fb.group<BookFormControl>({
      id: this.fb.control<number | null>(isEditMode ? data.book.id : data.bookId),
      title: this.fb.control<string | null>(
        isEditMode ? data.book.title : null,
        Validators.required,
      ),
      author: this.fb.control<string | null>(
        isEditMode ? data.book.author : null,
        Validators.required,
      ),
      year: this.fb.control<number | null>(isEditMode ? data.book.year : null, Validators.required),
      description: this.fb.control<string | null>(isEditMode ? data.book.description : null),
    });
  }
  public saveBook(): void {
    if (this.form.valid) {
      const book: Book = this.form.value as Book;
      if (this.mode === BookMode.add) {
        this.bookService.addBook(book);
      } else {
        this.bookService.updateBook(book);
      }
      this.dialogRef.close(DialogResponse.Yes);
    }
  }
  public closeModal(): void {
    this.dialogRef.close(DialogResponse.No);
  }
}
