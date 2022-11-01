import { Menu } from "./menu.model";

export const menus: Menu[] = [
    new Menu("statistics", "Statistics", 250, 133, 40, "#fa8528", true),
    new Menu("broker-buddy", "Broker Buddy", 67, 155, 95, "#439b5f", false),
    new Menu("currency-map", "Currency Map", 215, 55, 57, "#fa8528", false),
    new Menu("about", "About", 39, 170, 188, "#fa8528", false)
];