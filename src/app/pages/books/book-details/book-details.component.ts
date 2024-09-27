import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private dialogRef: MatDialogRef<BookDetailsComponent>
  ) {}

  public closeModal(): void {
    this.dialogRef.close();
  }
}
