import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/books.reducer';

export const loadBookData = createAction(
  '[books] load book data'
);
export const booksLoadedSuccessfully = createAction(
  '[books] books loaded successfully',
  props<{ payload: BookEntity[] }>()
);
export const booksLoadFailure = createAction(
  '[books] books loaded with failure',
  props<{ message: string }>()
);
