import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCalculatorProductSummaryComponent } from './savings-calculator-product-summary.component';

describe('SavingsCalculatorProductSummaryComponent', () => {
  let component: SavingsCalculatorProductSummaryComponent;
  let fixture: ComponentFixture<SavingsCalculatorProductSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsCalculatorProductSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsCalculatorProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
