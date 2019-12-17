import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function getFavoriteMovie() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('The Empire Strikes Back');
    }, 10);
  });
}

export function add(a: number, b: number) {
  return a + b;
}

export function returnsAnObservable() {
  return of('Return of the Jedi').pipe(
    delay(10)
  );
}
