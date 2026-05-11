import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-range-filter',
  imports: [FormsModule],
  templateUrl: './date-range-filter.html',
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
