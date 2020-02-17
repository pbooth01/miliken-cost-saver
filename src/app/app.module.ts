import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*Custom App Components*/
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { FooterComponent } from './layout/footer/footer.component';

/*Custom Modules*/
import { SavingsCalculatorModule } from './modules/savings-calculator/savings-calculator.module'

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SavingsCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
