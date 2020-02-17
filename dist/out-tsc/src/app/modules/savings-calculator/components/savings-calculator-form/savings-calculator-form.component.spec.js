import { async, TestBed } from '@angular/core/testing';
import { SavingsCalculatorFormComponent } from './savings-calculator-form.component';
describe('SavingsCalculatorFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SavingsCalculatorFormComponent]
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
//# sourceMappingURL=savings-calculator-form.component.spec.js.map