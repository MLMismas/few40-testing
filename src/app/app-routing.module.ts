import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { SuperBasicComponent } from './components/super-basic/super-basic.component';
import { BooksComponent } from './components/books/books.component';


const routes: Routes = [{
  path: 'shopping',
  component: ShoppingListComponent
},
{
  path: 'basic',
  component: SuperBasicComponent
},
{
  path: 'books',
  component: BooksComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
