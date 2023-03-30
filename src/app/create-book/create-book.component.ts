import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  book: Book = new Book();
  ngOnInit(): void {}

  onSubmit() {
    this.apiService
      .addBook(this.book)
      .subscribe(() => this.router.navigate(['/books']));
  }
}
