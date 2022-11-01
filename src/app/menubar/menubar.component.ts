import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from '../services/menu-service/menu.model';
import { MenuService } from '../services/menu-service/menu.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  @Output() menuChange = new EventEmitter<string>;
  
  constructor(private readonly menuService: MenuService) { }

  ngOnInit(): void {
  }

  public onMenuChange(color: string) {
    this.menuChange.emit(color);
  }

  public getMenus() : Menu[] {
    return this.menuService.getMenus();
  }

}
