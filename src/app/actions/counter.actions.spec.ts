import * as actions from './counter.actions';

describe('counter actions', () => {
  it('can set count by', () => {
    const result = actions.setCountBy({ payload: 32 });

    expect(result).toEqual({
      type: '[counter] set count by',
      payload: 32
    });
  });
});
