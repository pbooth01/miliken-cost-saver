import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SavingsCalculatorPageComponent = class SavingsCalculatorPageComponent {
    constructor(formBuilder, costCalcService) {
        this.formBuilder = formBuilder;
        this.costCalcService = costCalcService;
        this.PowerProSavings = 0;
        this.VictoryTapeSavings = 0;
        this.PowerTapeSavings = 0;
        this.PowerProSavingsPercentage = 0;
        this.VictoryTapeSavingsPercentage = 0;
        this.PowerTapeSavingsPercentage = 0;
        //Creating Binding for function so it can be called from form component
        this.calculateSavings = () => {
            let powerFlexCases = this.productForm.value.STECases + this.productForm.value.CohesiveCases;
            let tapeCases = this.productForm.value.LCWhiteTapeCases + this.productForm.value.HCWhiteTapeCases;
            let competingProductCost = this.costCalcService.calculateCompetingProductCost(this.productForm.value.TufSkinCases, this.productForm.value.HLPadCases, this.productForm.value.PreWrapCases, this.productForm.value.LCWhiteTapeCases, this.productForm.value.HCWhiteTapeCases, this.productForm.value.STECases, this.productForm.value.CohesiveCases);
            let powerProCost = this.costCalcService.calculateMillikenProductCost(powerFlexCases, tapeCases, "PowerPro");
            this.PowerProSavings = this.costCalcService.calculateMillikenProductSavings(powerProCost, competingProductCost);
            this.PowerProSavingsPercentage = this.costCalcService.calculateMillikenProductSavingsPercentage(this.PowerProSavings, competingProductCost);
            let victoryTapeCost = this.costCalcService.calculateMillikenProductCost(powerFlexCases, tapeCases, "VictoryTape");
            this.VictoryTapeSavings = this.costCalcService.calculateMillikenProductSavings(victoryTapeCost, competingProductCost);
            this.VictoryTapeSavingsPercentage = this.costCalcService.calculateMillikenProductSavingsPercentage(this.VictoryTapeSavings, competingProductCost);
            let powerTapeCost = this.costCalcService.calculateMillikenProductCost(powerFlexCases, tapeCases, "PowerTape");
            this.PowerTapeSavings = this.costCalcService.calculateMillikenProductSavings(powerTapeCost, competingProductCost);
            this.PowerTapeSavingsPercentage = this.costCalcService.calculateMillikenProductSavingsPercentage(this.PowerTapeSavings, competingProductCost);
        };
        this.productForm = this.formBuilder.group({
            TufSkinCases: [0],
            HLPadCases: [0],
            PreWrapCases: [0],
            LCWhiteTapeCases: [0],
            HCWhiteTapeCases: [0],
            STECases: [0],
            CohesiveCases: [0],
        });
    }
    ngOnInit() {
    }
};
SavingsCalculatorPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-savings-calculator-page',
        templateUrl: './savings-calculator-page.component.html',
        styleUrls: ['./savings-calculator-page.component.css']
    })
], SavingsCalculatorPageComponent);
export { SavingsCalculatorPageComponent };
//# sourceMappingURL=savings-calculator-page.component.js.map