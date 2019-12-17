import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  private data$: Observable<string[]> = of(['Bread', 'Milk', 'Cheese']);

  getShoppingList() {
    return this.data$;
  }
}
