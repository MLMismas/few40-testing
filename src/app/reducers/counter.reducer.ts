
import { createReducer, Action } from '@ngrx/store';

export interface State {
  current: number;
  by: number;
}

export const initialState: State = {
  current: 1,
  by: 1
};

export function reducer(state: State = initialState, action: Action) {
  return myReducer(state, action);
}

const myReducer = createReducer(
  initialState
);
