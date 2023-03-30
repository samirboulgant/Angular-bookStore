import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  books: Book[] = [];
  searchByTitle!: string;
  searchByCategory!: string;
  searchByAuthor!: string;

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.apiService.getBooks().subscribe((data) => (this.books = data));
  }
  deleteBook(id: number) {
    if (window.confirm('Are you sure?')) {
      this.apiService.delete(id).subscribe(() => this.getBooks());
    } else {
      // user clicked Cancel
      return;
    }
  }

  updateBook(id: number) {
    this.router.navigate(['updateBook', id]);
  }
  viewBook(id: number) {
    this.router.navigate(['viewBook', id]);
  }
  searchByDescreption() {
    if (
      !Boolean(this.searchByTitle) &&
      !Boolean(this.searchByAuthor) &&
      !Boolean(this.searchByCategory)
    ) {
      this.getBooks();
    } else if (
      Boolean(this.searchByTitle) &&
      !Boolean(this.searchByAuthor) &&
      !Boolean(this.searchByCategory)
    ) {
      this.apiService
        .searchByTitle(this.searchByTitle)
        .subscribe((data) => (this.books = data));
    } else if (
      !Boolean(this.searchByTitle) &&
      !Boolean(this.searchByAuthor) &&
      Boolean(this.searchByCategory)
    ) {
      console.log('search by cat');
      console.log(this.searchByTitle);
      this.apiService
        .searchByCategory(this.searchByCategory)
        .subscribe((data) => (this.books = data));
    } else if (
      !Boolean(this.searchByTitle) &&
      Boolean(this.searchByAuthor) &&
      !Boolean(this.searchByCategory)
    ) {
      console.log('search by Author');
      console.log(this.searchByTitle);
      this.apiService
        .searchByAuthor(this.searchByAuthor)
        .subscribe((data) => (this.books = data));
    } else if (
      Boolean(this.searchByTitle) &&
      !Boolean(this.searchByAuthor) &&
      Boolean(this.searchByCategory)
    ) {
      this.apiService
        .searchByTitleAndCategory(this.searchByTitle, this.searchByCategory)
        .subscribe((data) => (this.books = data));
    } else if (
      Boolean(this.searchByTitle) &&
      Boolean(this.searchByAuthor) &&
      !Boolean(this.searchByCategory)
    ) {
      this.apiService
        .searchByTitleAndAuthor(this.searchByTitle, this.searchByAuthor)
        .subscribe((data) => (this.books = data));
    } else if (
      !Boolean(this.searchByTitle) &&
      Boolean(this.searchByAuthor) &&
      Boolean(this.searchByCategory)
    ) {
      this.apiService
        .searchByAuthorAndCategory(this.searchByAuthor, this.searchByCategory)
        .subscribe((data) => (this.books = data));
    }
  }
}
