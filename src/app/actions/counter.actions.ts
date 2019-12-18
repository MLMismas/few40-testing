import { createAction, props } from '@ngrx/store';

export const incrementCount = createAction(
  '[counter] increment count'
);
export const decrementCount = createAction(
  '[counter] decrement count'
);
export const setCountBy = createAction(
  '[counter] set count by',
  props<{ payload: number }>()
);
