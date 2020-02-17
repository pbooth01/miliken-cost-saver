import { async, TestBed } from '@angular/core/testing';
import { SavingsCalculatorChartSummaryComponent } from './savings-calculator-chart-summary.component';
describe('SavingsCalculatorChartSummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SavingsCalculatorChartSummaryComponent]
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
//# sourceMappingURL=savings-calculator-chart-summary.component.spec.js.map