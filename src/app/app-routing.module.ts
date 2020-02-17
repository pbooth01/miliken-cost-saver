import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingsCalculatorPageComponent } from './modules/savings-calculator/pages/savings-calculator-page/savings-calculator-page.component'


const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
