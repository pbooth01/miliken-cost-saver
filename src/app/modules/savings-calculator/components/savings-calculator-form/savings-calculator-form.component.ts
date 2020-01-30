import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-savings-calculator-form',
  templateUrl: './savings-calculator-form.component.html',
  styleUrls: ['./savings-calculator-form.component.css']
})
export class SavingsCalculatorFormComponent implements OnInit {

  @Input() productForm: any;
  @Input() calculateSavings: any;

  constructor() {}

  ngOnInit() {
  }

}
