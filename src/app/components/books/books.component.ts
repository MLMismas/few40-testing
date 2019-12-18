import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookEntity } from 'src/app/reducers/books.reducer';
import { Store } from '@ngrx/store';
import { AppState, selectBooksArray } from 'src/app/reducers';
import { loadBookData } from 'src/app/actions/books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookEntity[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBooksArray);
  }

  load() {
    this.store.dispatch(loadBookData());
  }

}
