import { BooksComponentPage } from './books.po';

describe('the books component', () => {
  let page: BooksComponentPage;
  beforeEach(() => {
    page = new BooksComponentPage();
  });

  it('can load the list', () => {


    page.navigateTo();
    page.clickTheLoadButton();

    expect(page.getFirstItemOnTheList()).toBe('War of the World by Wells');
  });
});
