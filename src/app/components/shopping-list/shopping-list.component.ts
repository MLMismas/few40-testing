import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private service: DataService) { }

  list$: Observable<string[]>;
  ngOnInit() {
    this.list$ = this.service.getShoppingList();
    /* this.service.getShoppingList().pipe(
      tap(s => console.log(`You need to buy ${s}`))
    ).subscribe(); */
  }

}
