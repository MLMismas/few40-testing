import { browser, by, element } from 'protractor';

export class BooksComponentPage {
  getFirstItemOnTheList(): any {
    const el = element(by.css('[data-book-item="0"]'));
    // el.sendKeys(''); example of how you would fill out a form
    return el.getText();
  }
  clickTheLoadButton() {
    const el = element(by.css('[data-books-load]'));
    return el.click();
  }
  navigateTo() {
    return browser.get('/books');
  }

}
