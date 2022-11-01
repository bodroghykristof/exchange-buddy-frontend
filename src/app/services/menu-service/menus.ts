import { AboutComponent } from "src/app/about/about.component";
import { BrokerBuddyComponent } from "src/app/broker-buddy/broker-buddy.component";
import { CurrencyMapComponent } from "src/app/currency-map/currency-map.component";
import { StatisticsComponent } from "src/app/statistics/statistics.component";
import { Menu } from "./menu.model";

export const menus: Menu[] = [
    {
        path: "statistics", name: "Statistics", component: StatisticsComponent, colorR: 250, colorG: 133, colorB: 40, colorHex: "#fa8528", isDefault: true
    },
    {
        path: "broker-buddy", name: "Broker Buddy", component: BrokerBuddyComponent, colorR: 67, colorG: 155, colorB: 95, colorHex: "#439b5f", isDefault: false
    },
    {
        path: "currency-map", name: "Currency Map", component: CurrencyMapComponent, colorR: 215, colorG: 55, colorB: 57, colorHex: "#d73739", isDefault: false
    },
    {
        path: "about", name: "About", component: AboutComponent, colorR: 39, colorG: 170, colorB: 188, colorHex: "#27aabc", isDefault: false
    }
];