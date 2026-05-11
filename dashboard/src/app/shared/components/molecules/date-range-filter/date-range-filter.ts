import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'app-date-range-filter',
  standalone: true,
  imports: [],
  templateUrl: './date-range-filter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeFilter {
  startDate = input.required<string>();
  endDate = input.required<string>();
  total = input.required<number>();
  filtered = input.required<number>();

  startDateChange = output<string>();
  endDateChange = output<string>();

  clear() {
    this.startDateChange.emit('');
    this.endDateChange.emit('');
  }
}
