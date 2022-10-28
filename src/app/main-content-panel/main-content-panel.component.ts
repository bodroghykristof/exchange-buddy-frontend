import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-panel',
  templateUrl: './main-content-panel.component.html',
  styleUrls: ['./main-content-panel.component.scss']
})
export class MainContentPanelComponent implements OnInit {

  color: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  onColorChange(color: string) {
    this.color = color;
    console.log(color);
  }

}
