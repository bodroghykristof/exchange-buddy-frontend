import { Component } from '@angular/core';
import { Menu } from '../services/menu-service/menu.model';
import { MenuService } from '../services/menu-service/menu.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  
  constructor(private readonly menuService: MenuService) { }

  public getMenus() : Menu[] {
    return this.menuService.getMenus();
  }

}
