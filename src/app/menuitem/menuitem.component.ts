import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent {

  @Input() path: string | undefined = "";
  @Input() menuName: string = "";
  @Input() color: string = "";

  public isSelected() : boolean {
    return window.location.pathname === "/" + this.path;
  }

  public getBackgroundColor() : string {
    return window.location.pathname === "/" + this.path ? `linear-gradient(to right, ${this.color}, white)` : "";
  }

}
