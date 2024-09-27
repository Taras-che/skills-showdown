import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2001, description: 'DescriptionDescriptionDescriptionDescriptionDescription DescriptionDescriptionDescriptionDescriptionDescription   DescriptionDescription 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2004, description: 'Description' },
    { id: 3, title: 'Book 3', author: 'Author 3', year: 2024, description: 'DescDescriptionDescription Descriptionription' },
    { id: 4, title: 'Book 4', author: 'Author 4', year: 2022, description: 'Description' },
    { id: 5, title: 'Book 5', author: 'Author 5', year: 2053, description: 'DescriptionDescription DescriptionDescription Description' },
    { id: 6, title: 'Book 6', author: 'Author 7', year: 20021, description: 'Description' },
    { id: 7, title: 'Book 7', author: 'Author 4', year: 2008, description: 'Description' },
    { id: 8, title: 'Book 8', author: 'Author 9', year: 2010, description: 'Description' },
    { id: 9, title: 'Book 9', author: 'Author 2', year: 2008, description: 'Description' },
    { id: 10, title: 'Book 10', author: 'Author 1', year: 2007, description: 'Description' },
    { id: 11, title: 'Book 11', author: 'Author 7', year: 2015, description: 'Description' },
    { id: 12, title: 'Book 12', author: 'Author 2', year: 2016, description: 'Description' },
  ];

  private readonly storageKey = 'books';
  private booksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(this.books);
  public books$: Observable<Book[]> = this.booksSubject.asObservable();

  constructor() {
    const storedBooks = localStorage.getItem(this.storageKey);
    const books = storedBooks ? JSON.parse(storedBooks) : this.books;
    this.booksSubject.next(books);
    if (!storedBooks) {
      this.saveToLocalStorage(books);
    }
  }

  private saveToLocalStorage(books: Book[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  public addBook(book: Book): void {
    const currentBooks = this.booksSubject.value;
    const updatedBooks = [...currentBooks, book];
    this.booksSubject.next(updatedBooks);
    this.saveToLocalStorage(updatedBooks);
  }

  public updateBook(updatedBook: Book): void {
    const currentBooks = this.booksSubject.value;
    const updatedBooks = currentBooks.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    this.booksSubject.next(updatedBooks);
    this.saveToLocalStorage(updatedBooks);
  }

  public deleteBook(bookId: number): void {
    const currentBooks = this.booksSubject.value;
    const updatedBooks = currentBooks.filter((book) => book.id !== bookId);
    this.booksSubject.next(updatedBooks);
    this.saveToLocalStorage(updatedBooks);
  }
}
