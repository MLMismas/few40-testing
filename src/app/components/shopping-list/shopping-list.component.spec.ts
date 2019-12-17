import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { of } from 'rxjs';
import { DataService } from './data.service';
import { By } from '@angular/platform-browser';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent],
      providers: [{ provide: DataService, useClass: FakeDataService }]
    });

    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the list assigned', () => {
    expect(component.list$).toBeDefined(); // TODO: get the custom matcher
  });
  it('the second item should be More Beer', () => {
    const el = fixture.debugElement.query(By.css('[data-shopping-item="1"]')).nativeElement as HTMLElement;
    expect(el.innerText).toBe('More Beer');
  });
});

class FakeDataService extends DataService {
  getShoppingList() {
    return of(['Beer', 'More Beer', 'Extra Beer']);
  }
}
