import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as fromActions from '../actions/books.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(fromActions.booksLoadedSuccessfully, (state, action) => adapter.addAll(action.payload, state))
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



