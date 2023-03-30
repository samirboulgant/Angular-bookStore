import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'http://localhost:8080/books/';
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  addBook(book: Book): Observable<Object> {
    console.log(book);
    return this.httpClient.post(`${this.baseURL}`, book);
  }
  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
  getBookbyId(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}${id}`);
  }
  updateBook(book: Book): Observable<object> {
    return this.httpClient.put<Book>(`${this.baseURL}${book.id}`, book);
  }
  searchByTitle(title: string): Observable<Book[]> {
    const params = new HttpParams().set('title', title);
    return this.httpClient.get<Book[]>(`${this.baseURL}searchbytitle`, {
      params,
    });
  }
  searchByAuthor(author: string): Observable<Book[]> {
    const params = new HttpParams().set('author', author);
    return this.httpClient.get<Book[]>(`${this.baseURL}searchbyAuthor`, {
      params,
    });
  }
  searchByCategory(category: string): Observable<Book[]> {
    const params = new HttpParams().set('category', category);
    return this.httpClient.get<Book[]>(`${this.baseURL}searchbyCategory`, {
      params,
    });
  }

  searchByTitleAndCategory(
    title: string,
    category: string
  ): Observable<Book[]> {
    console.log('les deux');
    const params = new HttpParams()
      .set('title', title)
      .set('category', category);
    return this.httpClient.get<Book[]>(`${this.baseURL}searchbyCatAndTilte`, {
      params,
    });
  }

  searchByTitleAndAuthor(title: string, author: string): Observable<Book[]> {
    console.log('title and author');
    const params = new HttpParams().set('title', title).set('author', author);
    return this.httpClient.get<Book[]>(
      `${this.baseURL}searchByTitleAndAuthor`,
      {
        params,
      }
    );
  }
  searchByAuthorAndCategory(
    author: string,
    category: string
  ): Observable<Book[]> {
    console.log('cate and author');
    const params = new HttpParams()
      .set('author', author)
      .set('category', category);
    return this.httpClient.get<Book[]>(
      `${this.baseURL}searchByAuthorAndCategory`,
      {
        params,
      }
    );
  }
}
