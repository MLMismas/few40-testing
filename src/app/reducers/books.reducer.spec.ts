import { booksLoadedSuccessfully } from '../actions/books.actions';
import * as fromBooksReducer from './books.reducer';
describe('the books reducer', () => {
  it('handles new data', () => {

    const action = booksLoadedSuccessfully({
      payload: [
        { id: '1', title: 'Jaws', author: 'Benchley' }
      ]
    });

    const initialState = fromBooksReducer.adapter.getInitialState();
    // empty initial state

    const newState = fromBooksReducer.reducer(initialState, action);

    expect(newState.ids).toEqual(['1']);
    expect(newState.entities[1]).toEqual({
      id: '1', title: 'Jaws', author: 'Benchley'
    });
  });
});
