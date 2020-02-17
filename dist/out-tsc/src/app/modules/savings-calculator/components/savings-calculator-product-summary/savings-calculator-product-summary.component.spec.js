import { async, TestBed } from '@angular/core/testing';
import { SavingsCalculatorProductSummaryComponent } from './savings-calculator-product-summary.component';
describe('SavingsCalculatorProductSummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SavingsCalculatorProductSummaryComponent]
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
//# sourceMappingURL=savings-calculator-product-summary.component.spec.js.map