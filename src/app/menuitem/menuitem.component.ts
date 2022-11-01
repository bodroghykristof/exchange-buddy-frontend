import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {

  @Input() path: string | undefined = "";
  @Input() menuName: string = "";
  @Input() color: string = "";
  @Output() select = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
    if (this.isSelected()) {
      this.select.emit(this.color);
    }
  }

  public onClick() {
    this.select.emit(this.color);
  }

  public isSelected() : boolean {
    return window.location.pathname === "/" + this.path;
  }

}
