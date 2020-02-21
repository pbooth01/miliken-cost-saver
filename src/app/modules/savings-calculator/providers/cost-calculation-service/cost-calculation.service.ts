import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostCalculationService {

  competing_product_cost_mapper: any = {
    TufSkin: 10.00,
    HLPads: 25.00,
    PreWrap: 47.00,
    LCWhiteTape: 42.00,
    HCWhiteTape: 70.00,
    STE: 42.00,
    Cohesive: 26.00
  }

  milliken_product_cost_mapper: any = {
    PowerFlex: 26.00,
    VictoryTape: 29.00,
    PowerPro: 53.00,
    PowerTape: 34.00
  }

  constructor() { }

  cleanInput(input: number){
    if(input == null || Number.isNaN(input) || input < 0){
      return null;
    }
    return input;
  }

  calculateCompetingProductCost(
    TufSkinBottles: number = 0, HLPadCases: number = 0, PreWrapCases: number = 0, LCWhiteTapeCases: number = 0, 
    HCWhiteTapeCases: number = 0, STECases: number = 0, CohesiveCases: number = 0){
      return (
        (this.competing_product_cost_mapper["TufSkin"] * this.cleanInput(TufSkinBottles)) +
        (this.competing_product_cost_mapper["HLPads"] * this.cleanInput(HLPadCases)) +
        (this.competing_product_cost_mapper["PreWrap"] * this.cleanInput(PreWrapCases)) +
        (this.competing_product_cost_mapper["LCWhiteTape"] * this.cleanInput(LCWhiteTapeCases)) +
        (this.competing_product_cost_mapper["HCWhiteTape"] * this.cleanInput(HCWhiteTapeCases)) +
        (this.competing_product_cost_mapper["STE"] * this.cleanInput(STECases)) +
        (this.competing_product_cost_mapper["Cohesive"] * this.cleanInput(CohesiveCases)))
  }

  calculateMillikenProductCost(PowerFlexCases: number, ProductTapeCases: number, ProductName: string){
    return (
      (this.milliken_product_cost_mapper["PowerFlex"] * PowerFlexCases) +
      (this.milliken_product_cost_mapper[ProductName] * ProductTapeCases))
  }

  calculateMillikenProductSavings(millikenProductsCost: number, competetiveProductsCost: number){
    return competetiveProductsCost - millikenProductsCost;
  }

  calculateMillikenProductSavingsPercentage(calculatedSavings: number, competetiveProductsCost: number){
    return Math.round((calculatedSavings / competetiveProductsCost) * 100)
  }  
}
