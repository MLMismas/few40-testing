import { add, getFavoriteMovie, returnsAnObservable } from './asyncme';
import { doesNotThrow } from 'assert';

describe('async stuff', () => {
  it('testing a synchronous method', () => {
    const answer = add(2, 2);
    expect(answer).toBe(4);
  });
});

describe('using a promise', () => {
  it('getting it using a callback', (done) => {
    const promise = getFavoriteMovie();
    promise.then(movie => {
      expect(movie).toBe('The Empire Strikes Back');
      done();
    });
  });

  it('using async and await', async () => {
    const movie = await getFavoriteMovie();
    expect(movie).toBe('The Empire Strikes Back');
  });
});

describe('getting it using an observable', () => {
  it('using the callback', (done) => {
    const s = returnsAnObservable().subscribe(movie => {
      expect(movie).toBe('Return of the Jedi');
      s.unsubscribe();
      done();
    });
  });
  it('turn it into a promise', async () => {
    const movie = await returnsAnObservable().toPromise();
    expect(movie).toBe('Return of the Jedi');
  });
});
