import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  @Output() menuChange = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuChange(color: string) {
    this.menuChange.emit(color);
  }

}
