import * as fromBooks from './books.reducer';
import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  books: fromBooks.State;
  counter: fromCounter.State;
}

export const reducers = {
  books: fromBooks.reducer,
  counter: fromCounter.reducer
};

// Selectors

// 1. Feature

// 2. Per Branch
export const _selectBookBranch = (state: AppState) => state.books;
export const _selectCounterBranch = (state: AppState) => state.counter;

// 3. Helpers

// 4. For components
export const selectCurrentCount = createSelector(
  _selectCounterBranch,
  b => b.current
);

export const selectCountingBy = createSelector(
  _selectCounterBranch,
  b => b.by
);

export const selectNextNumber = createSelector(
  selectCurrentCount,
  selectCountingBy,
  (c, b) => c + b
);
