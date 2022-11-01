import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu-service/menu.service';

@Component({
  selector: 'app-main-content-panel',
  templateUrl: './main-content-panel.component.html',
  styleUrls: ['./main-content-panel.component.scss']
})
export class MainContentPanelComponent implements OnInit {

  color: string = "";

  constructor(private readonly menuService: MenuService) { 
    this.color = menuService.getActiveColor();
   }

  ngOnInit(): void {
    
  }

  onColorChange(color: string) {
    this.color = color;
    console.log(color);
  }

}
