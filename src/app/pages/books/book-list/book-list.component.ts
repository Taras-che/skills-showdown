import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookFormComponent } from '../book-form/book-form.component';
import { debounceTime, distinctUntilChanged, filter, Subject, takeUntil } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Book, BookMode } from '../model/book.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationAlertComponent } from '../../../shared/notification-alert/notification-alert.component';
import { DialogResponse } from '../../../shared/confirm-dialog/confirm-dialog.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})

export class BookListComponent implements OnInit {
  private searchSubject: Subject<string> = new Subject<string>();
  private unsubscribe$: Subject<void> = new Subject<void>();
  private dialogResponse = DialogResponse;
  public books: Book[] = [];
  public dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>([]);
  public displayedColumns: string[] = ['title', 'author', 'year', 'action'];

  constructor(private readonly bookService: BookService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getDataFromService();

    this.searchSubject.pipe(
      debounceTime(1250),
      distinctUntilChanged(),
      takeUntil(this.unsubscribe$),
    ).subscribe(searchText => {
      this.dataSource.data = this.books.filter(book =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }

  private getDataFromService(): void {
    this.bookService.books$.pipe(takeUntil(this.unsubscribe$)).subscribe(books => {
      this.books = books;
      this.dataSource.data = books;
    });
  }

  private pushNotification(message: string, duration: number): void {
    this.snackBar.openFromComponent(NotificationAlertComponent, {
      data: message,
      duration
    })
  }

  public onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }

  public openDetails(book: Book): void {
    this.dialog.open(BookDetailsComponent, {
      data: book,
      maxWidth: 600,
      minWidth: 600,
    });
  }

  public addBook(): void {
    this.dialog.open(BookFormComponent, {
      data: { mode: BookMode.add, bookId: this.books.length +1 },
      maxWidth: 900,
      // no needs to unsubscribe because when dialog close angular destroy all subs
    }).afterClosed().subscribe((dialogResult: string) => {
      if(dialogResult === undefined || dialogResult === this.dialogResponse.No) return;

      this.pushNotification('Book successfully added!', 2000);
      this.getDataFromService();
    });
  }

  public editBook(book: Book): void {
    this.dialog.open(BookFormComponent, {
      data: { mode: BookMode.edit, book },
      maxWidth: 900,
    }).afterClosed()
      .pipe(filter(dialogResult => dialogResult === this.dialogResponse.Yes))
      .subscribe(() =>
        this.pushNotification('Book successfully edited!', 2000)
       );
  }

  public deleteBook(id: number, bookTitle: string): void {
    this.dialog.open(ConfirmDialogComponent,{
      minWidth: 500,
      data: {
        title: `Book deleting!`,
        mainText: `Are you sure you want to delete ${bookTitle} ?`,
        noButton: 'Cancel',
        yesButton: 'Confirm',
        isDanger: true,
      }
    }).afterClosed()
      .pipe(filter(dialogResult => dialogResult === this.dialogResponse.Yes))
      .subscribe(() => {
        this.bookService.deleteBook(id)
        this.pushNotification('Book successfully deleted!', 2000);
      })
  }
}
