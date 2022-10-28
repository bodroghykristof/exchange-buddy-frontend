import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerBuddyComponent } from './broker-buddy/broker-buddy.component';
import { CurrencyMapComponent } from './currency-map/currency-map.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: "statistics", component: StatisticsComponent},
  {path: "broker-buddy", component: BrokerBuddyComponent},
  {path: "currency-map", component: CurrencyMapComponent},
  {path: "**", redirectTo: "statistics", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
