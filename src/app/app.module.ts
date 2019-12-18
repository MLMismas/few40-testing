import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperBasicComponent } from './components/super-basic/super-basic.component';
import { DefaultsService } from './components/super-basic/defaults.service';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { DataService } from './components/shopping-list/data.service';
import { EnvironmentService } from './services/environment.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { BookEffects } from './effects/book.effects';
import { EffectsModule } from '@ngrx/effects';
import { BooksComponent } from './components/books/books.component';
import { BookDataService } from './services/books-data.service';

const serviceToUse = new DefaultsService();
serviceToUse._default = 'PIZZA IS BEST!';

@NgModule({
  declarations: [
    AppComponent,
    SuperBasicComponent,
    ShoppingListComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [{ provide: DefaultsService, useValue: serviceToUse },
    DataService,
    BookDataService,
    EnvironmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
