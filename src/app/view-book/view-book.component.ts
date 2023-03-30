import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent {
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
}
