import { Injectable } from '@angular/core';
import { Menu } from './menu.model';
import { menus } from './menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() : Menu[] {
    return menus;
  }

}
