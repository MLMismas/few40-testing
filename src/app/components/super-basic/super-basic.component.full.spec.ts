import { SuperBasicComponent } from './super-basic.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click, ButtonClickEvents } from 'src/app/utils/testing';
import { DefaultsService } from './defaults.service';

describe('Using the component', () => {
  let component: SuperBasicComponent;
  let fixture: ComponentFixture<SuperBasicComponent>;

  let deH1: DebugElement;
  let elH1: HTMLElement;
  let deBtn: DebugElement;
  let elBtn: HTMLInputElement;
  let fakeService: DefaultsService;

  beforeEach(() => {
    fakeService = {
      _default: '',
      getDefault() {
        return 'Tacos';
      }
    };
    TestBed.configureTestingModule({
      declarations: [SuperBasicComponent],
      providers: [{ provide: DefaultsService, useValue: fakeService }]
    });

    fixture = TestBed.createComponent(SuperBasicComponent);
    component = fixture.componentInstance;

    deH1 = fixture.debugElement.query(By.css('[data-basic-word]'));
    elH1 = deH1.nativeElement;
    deBtn = fixture.debugElement.query(By.css('[data-basic-button]'));
    elBtn = deBtn.nativeElement;
    fixture.detectChanges();
  });

  it('created the component', () => {
    expect(component).toBeDefined();
  });

  it('has the right default value', () => {
    expect(elH1.innerText).toBe('Tacos');
  });

  it('allows you to click to make the thing upper', () => {
    click(elBtn);
    // click(deBtn, ButtonClickEvents.left); click with the left mouse button
    fixture.detectChanges();
    expect(elH1.innerText).toBe('TACOS');
  });
});
