import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rate-card[currency]',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.scss']
})
export class RateCardComponent implements OnInit {

  arrowIcon = faArrowUp;
  // arrowIcon = faArrowDown;

  arrowColor = "green";
  // arrowColor = "red";

  @Input() currency!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
