import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CostCalculationService = class CostCalculationService {
    constructor() {
        this.competing_product_cost_mapper = {
            TufSkin: 10.00,
            HLPads: 25.00,
            PreWrap: 47.00,
            LCWhiteTape: 42.00,
            HCWhiteTape: 55.00,
            STE: 42.00,
            Cohesive: 26.00
        };
        this.milliken_product_cost_mapper = {
            PowerFlex: 26.00,
            VictoryTape: 29.00,
            PowerPro: 53.00,
            PowerTape: 34.00
        };
    }
    cleanInput(input) {
        if (input == null || Number.isNaN(input) || input < 0) {
            return null;
        }
        return input;
    }
    calculateCompetingProductCost(TufSkinBottles = 0, HLPadCases = 0, PreWrapCases = 0, LCWhiteTapeCases = 0, HCWhiteTapeCases = 0, STECases = 0, CohesiveCases = 0) {
        return ((this.competing_product_cost_mapper["TufSkin"] * this.cleanInput(TufSkinBottles)) +
            (this.competing_product_cost_mapper["HLPads"] * this.cleanInput(HLPadCases)) +
            (this.competing_product_cost_mapper["PreWrap"] * this.cleanInput(PreWrapCases)) +
            (this.competing_product_cost_mapper["LCWhiteTape"] * this.cleanInput(LCWhiteTapeCases)) +
            (this.competing_product_cost_mapper["HCWhiteTape"] * this.cleanInput(HCWhiteTapeCases)) +
            (this.competing_product_cost_mapper["STE"] * this.cleanInput(STECases)) +
            (this.competing_product_cost_mapper["Cohesive"] * this.cleanInput(CohesiveCases)));
    }
    calculateMillikenProductCost(PowerFlexCases, ProductTapeCases, ProductName) {
        return ((this.milliken_product_cost_mapper["PowerFlex"] * PowerFlexCases) +
            (this.milliken_product_cost_mapper[ProductName] * ProductTapeCases));
    }
    calculateMillikenProductSavings(millikenProductsCost, competetiveProductsCost) {
        return competetiveProductsCost - millikenProductsCost;
    }
    calculateMillikenProductSavingsPercentage(calculatedSavings, competetiveProductsCost) {
        return Math.round((calculatedSavings / competetiveProductsCost) * 100);
    }
};
CostCalculationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CostCalculationService);
export { CostCalculationService };
//# sourceMappingURL=cost-calculation.service.js.map