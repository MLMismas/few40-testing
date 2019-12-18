import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookDataService } from '../services/books-data.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as bookActions from '../actions/books.actions';
import { of } from 'rxjs';

// Create an effect that turns a loadBooks => (loadBooksSuccess | loadBooksFailure)
// Use our BookDataService

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.loadBookData),
      switchMap(() => this.service.getAllBooks()
        .pipe(
          map(books => bookActions.booksLoadedSuccessfully({ payload: books })),
          catchError((err) => of(bookActions.booksLoadFailure({ message: 'FAIL!' })))
        )
      )
    )
  );

  constructor(private service: BookDataService, private actions$: Actions) { }
}
