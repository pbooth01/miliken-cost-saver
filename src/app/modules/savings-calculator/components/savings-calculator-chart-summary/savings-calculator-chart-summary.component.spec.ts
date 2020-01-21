import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCalculatorChartSummaryComponent } from './savings-calculator-chart-summary.component';

describe('SavingsCalculatorChartSummaryComponent', () => {
  let component: SavingsCalculatorChartSummaryComponent;
  let fixture: ComponentFixture<SavingsCalculatorChartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsCalculatorChartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsCalculatorChartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
