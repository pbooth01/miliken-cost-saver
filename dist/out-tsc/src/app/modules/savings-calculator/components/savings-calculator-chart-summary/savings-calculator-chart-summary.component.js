import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SavingsCalculatorChartSummaryComponent = class SavingsCalculatorChartSummaryComponent {
    constructor() {
        this.PowerProSavingsPercentage = 0;
        this.VictoryTapeSavingsPercentage = 0;
        this.PowerTapeSavingsPercentage = 0;
        this.chartInput = [
            {
                "name": "PowerFlex + PowerPro",
                "value": this.PowerProSavingsPercentage
            },
            {
                "name": "PowerFlex + VictoryTape",
                "value": this.VictoryTapeSavingsPercentage
            },
            {
                "name": "PowerFlex + PowerTape",
                "value": this.PowerTapeSavingsPercentage
            }
        ];
        this.view = [450, 350];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Product';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Annual Savings Percentage';
        this.roundEdges = false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        debugger;
        for (const property in changes) {
            let splitName = ;
        }
        // clear the data array
        this.chartInput = [];
        this.chartInput = [
            {
                "name": "PowerFlex + PowerPro",
                "value": Number.isNaN(changes.PowerProSavingsPercentage.currentValue) ? 0 : changes.PowerProSavingsPercentage.currentValue
            },
            {
                changes, "name": "PowerFlex + VictoryTape",
                "value": Number.isNaN(changes.VictoryTapeSavingsPercentage.currentValue) ? 0 : changes.VictoryTapeSavingsPercentage.currentValue
            },
            {
                "name": "PowerFlex + PowerTape",
                "value": Number.isNaN(changes.PowerTapeSavingsPercentage.currentValue) ? 0 : changes.PowerTapeSavingsPercentage.currentValue
            }
        ];
    }
};
tslib_1.__decorate([
    Input()
], SavingsCalculatorChartSummaryComponent.prototype, "PowerProSavingsPercentage", void 0);
tslib_1.__decorate([
    Input()
], SavingsCalculatorChartSummaryComponent.prototype, "VictoryTapeSavingsPercentage", void 0);
tslib_1.__decorate([
    Input()
], SavingsCalculatorChartSummaryComponent.prototype, "PowerTapeSavingsPercentage", void 0);
SavingsCalculatorChartSummaryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-savings-calculator-chart-summary',
        templateUrl: './savings-calculator-chart-summary.component.html',
        styleUrls: ['./savings-calculator-chart-summary.component.css']
    })
], SavingsCalculatorChartSummaryComponent);
export { SavingsCalculatorChartSummaryComponent };
//# sourceMappingURL=savings-calculator-chart-summary.component.js.map