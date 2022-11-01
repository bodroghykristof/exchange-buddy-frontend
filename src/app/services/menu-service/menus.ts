import { Menu } from "./menu.model";

export const menus: Menu[] = [
    {
        path: "statistics", name: "Statistics", colorR: 250, colorG: 133, colorB: 40, colorHex: "#fa8528", isDefault: true
    },
    {
        path: "broker-buddy", name: "Broker Buddy", colorR: 67, colorG: 155, colorB: 95, colorHex: "#439b5f", isDefault: false
    },
    {
        path: "currency-map", name: "Currency Map", colorR: 215, colorG: 55, colorB: 57, colorHex: "#d73739", isDefault: true
    },
    {
        path: "about", name: "About", colorR: 39, colorG: 170, colorB: 188, colorHex: "#27aabc", isDefault: true
    }
];