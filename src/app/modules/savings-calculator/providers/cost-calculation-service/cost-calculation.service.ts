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
    HCWhiteTape: 55.00,
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

  calculateCompetingProductCost(
    TufSkinBottles: number, HLPadCases: number, PreWrapCases: number, LCWhiteTapeCases: number, 
    HCWhiteTapeCases: number, STECases: number, CohesiveCases: number){
      return (
        (this.competing_product_cost_mapper["TufSkin"] * TufSkinBottles) +
        (this.competing_product_cost_mapper["HLPads"] * HLPadCases) +
        (this.competing_product_cost_mapper["PreWrap"] * PreWrapCases) +
        (this.competing_product_cost_mapper["LCWhiteTape"] * LCWhiteTapeCases) +
        (this.competing_product_cost_mapper["HCWhiteTape"] * HCWhiteTapeCases) +
        (this.competing_product_cost_mapper["STE"] * STECases) +
        (this.competing_product_cost_mapper["Cohesive"] * CohesiveCases))
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
