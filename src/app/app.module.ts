import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRatePanelComponent } from './exchange-rate-panel/exchange-rate-panel.component';
import { MainContentPanelComponent } from './main-content-panel/main-content-panel.component';
import { RateCardComponent } from './rate-card/rate-card.component';
import { MenubarComponent } from './menubar/menubar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BrokerBuddyComponent } from './broker-buddy/broker-buddy.component';
import { CurrencyMapComponent } from './currency-map/currency-map.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatePanelComponent,
    MainContentPanelComponent,
    RateCardComponent,
    MenubarComponent,
    StatisticsComponent,
    BrokerBuddyComponent,
    CurrencyMapComponent,
    MenuitemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
