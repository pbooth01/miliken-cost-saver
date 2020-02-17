import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SavingsCalculatorPageComponent } from './modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component';
const routes = [
    {
        path: 'savings-calculator',
        component: SavingsCalculatorPageComponent,
        data: { title: 'Savings Calculator' }
    },
    { path: '',
        redirectTo: '/savings-calculator',
        pathMatch: 'full'
    },
    { path: '**', component: SavingsCalculatorPageComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map