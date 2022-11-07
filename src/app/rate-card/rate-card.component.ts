import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { faArrowDown, faArrowUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rate-card[currency][exchangeRate]', // this sets required attributes
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.scss']
})
export class RateCardComponent implements OnChanges {

  @Input() currency!: string;
  @Input() exchangeRate?: number;
  
  arrowIcon: IconDefinition | null = null;
  arrowColor: string | null = null;
  increase: boolean | null = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let change: SimpleChange = changes['exchangeRate'];
    if (change && change.previousValue && change.currentValue) {
      console.log("CHANGE, prev: " + change.previousValue + ", current: " + change.currentValue);
      if (change.previousValue < change.currentValue) {
        this.arrowColor = "green";
        this.arrowIcon = faArrowUp;
        this.increase = true;
      } else {
        this.arrowColor = "red";
        this.arrowIcon = faArrowDown;
        this.increase = false;
      }
    }
  }

}
