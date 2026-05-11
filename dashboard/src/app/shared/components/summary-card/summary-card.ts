import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  templateUrl: './summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryCard {
  label = input.required<string>();
  value = input.required<string>();
}
