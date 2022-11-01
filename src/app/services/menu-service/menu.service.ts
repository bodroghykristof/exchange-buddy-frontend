import { Injectable } from '@angular/core';
import { Menu } from './menu.model';
import { menus } from './menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  defaultMenu: Menu;

  constructor() { 
    this.defaultMenu = menus.filter(m => m.isDefault)[0];
   }

  getMenus() : Menu[] {
    return menus;
  }

  getActiveColor() : string {
    const selectedMenus: Menu[] = menus.filter(menu => window.location.pathname === "/" + menu.path);
    return selectedMenus.length === 0 ? this.defaultMenu.colorHex : selectedMenus[0].colorHex;
  }

}
