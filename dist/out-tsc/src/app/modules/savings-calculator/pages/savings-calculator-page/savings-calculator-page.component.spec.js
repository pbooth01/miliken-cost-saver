import { async, TestBed } from '@angular/core/testing';
import { SavingsCalculatorPageComponent } from './savings-calculator-page.component';
describe('SavingsCalculatorPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SavingsCalculatorPageComponent]
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
//# sourceMappingURL=savings-calculator-page.component.spec.js.map