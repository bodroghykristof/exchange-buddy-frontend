import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {

  @Input() path: string = "";
  @Input() menuName: string = "";
  @Input() color: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log(window.location.pathname);
  }

  public onClick() {
    console.log("Menuitem clicked");
  }

  public isSelected() : boolean {
    return window.location.pathname === "/" + this.path;
  }

}
