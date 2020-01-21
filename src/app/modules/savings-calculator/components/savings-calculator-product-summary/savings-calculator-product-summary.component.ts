import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-savings-calculator-product-summary',
  templateUrl: './savings-calculator-product-summary.component.html',
  styleUrls: ['./savings-calculator-product-summary.component.css']
})
export class SavingsCalculatorProductSummaryComponent implements OnInit {

  @Input() PowerProSavings: number;
  @Input() VictoryTapeSavings: number;
  @Input() PowerTapeSavings: number;

  constructor() { }

  ngOnInit() {
  }

}
