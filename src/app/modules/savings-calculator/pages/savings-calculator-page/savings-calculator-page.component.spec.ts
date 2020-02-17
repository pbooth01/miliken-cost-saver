import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCalculatorPageComponent } from './savings-calculator-page.component';

describe('SavingsCalculatorPageComponent', () => {
  let component: SavingsCalculatorPageComponent;
  let fixture: ComponentFixture<SavingsCalculatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsCalculatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
