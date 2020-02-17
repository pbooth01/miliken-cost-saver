import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCalculatorFormComponent } from './savings-calculator-form.component';

describe('SavingsCalculatorFormComponent', () => {
  let component: SavingsCalculatorFormComponent;
  let fixture: ComponentFixture<SavingsCalculatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsCalculatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
