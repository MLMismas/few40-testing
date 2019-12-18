import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class BookDataService {

  private url: string;
  getAllBooks(): Observable<BookListItem[]> {
    return this.client.get<ResponseFromServer>(this.url)
      .pipe(
        map(r => r.books),
        map(books => books.map(book => {
          const { id, title, author } = book;
          return { id, title, author };
        }),
          retry(3)
        ));
  }

  constructor(private client: HttpClient, private environment: EnvironmentService) {
    this.url = environment.apiUrl + '/books';
  }
}

export interface BookListItem {
  id: string;
  title: string;
  author: string;
}

export interface ResponseFromServer {
  books: ResponseListItem[];
}

interface ResponseListItem {
  id: string;
  title: string;
  author: string;
  yearPublished: number;
}
