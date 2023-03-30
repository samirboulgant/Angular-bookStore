import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  book: Book = new Book();
  id!: number;

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.apiService
      .getBookbyId(this.id)
      .subscribe((data) => (this.book = data));
  }
  onSubmit() {
    this.apiService
      .updateBook(this.book)
      .subscribe(() => this.route.navigate(['/books']));
  }
}
