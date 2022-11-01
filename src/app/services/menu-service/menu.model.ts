import { Route } from "@angular/router";

export interface Menu extends Route {
    name: string,
    colorR: number,
    colorG: number,
    colorB: number,
    colorHex: string,
    isDefault: boolean
}
