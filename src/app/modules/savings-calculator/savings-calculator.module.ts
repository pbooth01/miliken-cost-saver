import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SavingsCalculatorPageComponent } from './pages/savings-calculator-page/savings-calculator-page.component';
import { SavingsCalculatorFormComponent } from './components/savings-calculator-form/savings-calculator-form.component';
import { SavingsCalculatorChartSummaryComponent } from './components/savings-calculator-chart-summary/savings-calculator-chart-summary.component';
import { SavingsCalculatorProductSummaryComponent } from './components/savings-calculator-product-summary/savings-calculator-product-summary.component';

import { CostCalculationService } from './providers/cost-calculation-service/cost-calculation.service'



@NgModule({
  declarations: [SavingsCalculatorPageComponent, SavingsCalculatorFormComponent, SavingsCalculatorChartSummaryComponent, SavingsCalculatorProductSummaryComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule
  ],
  providers:[
    CostCalculationService
  ]
})
export class SavingsCalculatorModule { }
