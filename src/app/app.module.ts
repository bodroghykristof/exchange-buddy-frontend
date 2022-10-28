import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRatePanelComponent } from './exchange-rate-panel/exchange-rate-panel.component';
import { MainContentPanelComponent } from './main-content-panel/main-content-panel.component';
import { RateCardComponent } from './rate-card/rate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatePanelComponent,
    MainContentPanelComponent,
    RateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
