import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-calculator-page',
  templateUrl: './savings-calculator-page.component.html',
  styleUrls: ['./savings-calculator-page.component.css']
})
export class SavingsCalculatorPageComponent implements OnInit {

  PowerProSavings: number = 1000;
  VictoryTapeSavings: number = 4000;
  PowerTapeSavings: number = 3000

  constructor() { }

  ngOnInit() {
  }

}
