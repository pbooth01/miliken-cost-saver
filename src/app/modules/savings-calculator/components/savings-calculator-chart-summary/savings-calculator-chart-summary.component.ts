import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-calculator-chart-summary',
  templateUrl: './savings-calculator-chart-summary.component.html',
  styleUrls: ['./savings-calculator-chart-summary.component.css']
})
export class SavingsCalculatorChartSummaryComponent implements OnInit {

  single: any[] = [
    {
      "name": "Power flex + PowerPro",
      "value": 4.8
    },
    {
      "name": "Power flex + VictoryTape",
      "value": 5.8
    },
    {
      "name": "Power flex + PowerTape",
      "value": 7.5
    }
  ];

  view: any[] = [450, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Product';
  showYAxisLabel = true;
  yAxisLabel = 'Annual Savings Percentage';

  /*colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };*/

  constructor() { }

  ngOnInit() {
  }

}
