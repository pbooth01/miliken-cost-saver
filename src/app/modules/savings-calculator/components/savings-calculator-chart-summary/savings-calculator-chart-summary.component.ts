import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-savings-calculator-chart-summary',
  templateUrl: './savings-calculator-chart-summary.component.html',
  styleUrls: ['./savings-calculator-chart-summary.component.css']
})
export class SavingsCalculatorChartSummaryComponent implements OnInit {

  @Input() PowerProSavingsPercentage: number = 0;
  @Input() VictoryTapeSavingsPercentage: number = 0;
  @Input() PowerTapeSavingsPercentage: number = 0;

  chartInput: any[] = [
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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.chartInput = [
      {
        "name": "PowerFlex + PowerPro",
        "value": Number.isNaN(changes.PowerProSavingsPercentage.currentValue) ? 0 : changes.PowerProSavingsPercentage.currentValue
      },
      {
        "name": "PowerFlex + VictoryTape",
        "value": Number.isNaN(changes.VictoryTapeSavingsPercentage.currentValue) ? 0 : changes.VictoryTapeSavingsPercentage.currentValue
      },
      {
        "name": "PowerFlex + PowerTape",
        "value": Number.isNaN(changes.PowerTapeSavingsPercentage.currentValue) ? 0 : changes.PowerTapeSavingsPercentage.currentValue
      }
    ];
  }

}
