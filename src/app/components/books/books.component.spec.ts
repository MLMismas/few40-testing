import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore, MockSelector } from '@ngrx/store/testing';
import { BooksComponent } from './books.component';
import { AppState, selectBooksArray } from 'src/app/reducers';
import { MemoizedSelector, Store } from '@ngrx/store';
import { BookEntity } from 'src/app/reducers/books.reducer';
import { loadBookData } from 'src/app/actions/books.actions';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let mockStore: MockStore<AppState>;
  let mockBooksSelector: MemoizedSelector<AppState, BookEntity[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BooksComponent],
      providers: [provideMockStore()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockBooksSelector = mockStore.overrideSelector(selectBooksArray,
      [{ id: '99', title: 'Joe', author: 'Joe Schmidt' }]
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load the books', () => {
    component.load();
    component.books$.subscribe(books => {
      expect(books).toEqual([{ id: '99', title: 'Joe', author: 'Joe Schmidt' }]);
    });
  });
  it('should dispatch the action', () => {
    const action = loadBookData();

    spyOn(mockStore, 'dispatch').and.callThrough();
    component.load();
    expect((mockStore.dispatch as any).calls.first().args[0].type).toBe(action.type);
  });
});
