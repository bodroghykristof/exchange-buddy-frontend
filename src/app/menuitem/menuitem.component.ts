import { Component, Input } from '@angular/core';
import { Menu } from '../services/menu-service/menu.model';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent {

  @Input() menu!: Menu;

  public isSelected(): boolean {
    return window.location.pathname === "/" + this.menu.path;
  }

  public getBackgroundColor(): string {
    return window.location.pathname === "/" + this.menu.path
      ? `linear-gradient(to right, ${this.menu.colorHex}, rgba(${this.menu.colorR}, ${this.menu.colorG}, ${this.menu.colorB}, 0.5) 95%)` : "";
  }

}
