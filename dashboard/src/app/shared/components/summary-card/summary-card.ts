import { Component, input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.html',
})
export class SummaryCard {
  label = input.required<string>();
  value = input.required<string>();
}
