import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CurrencyPipe, DatePipe, formatCurrency } from '@angular/common';
import { FinanceService } from '../finance.service';
import { Expense } from '../finance.models';
import { SummaryCard } from '../../../shared/components/summary-card/summary-card';
import { DateRangeFilter } from '../../../shared/components/molecules/date-range-filter/date-range-filter';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, SummaryCard, DateRangeFilter],
  templateUrl: './expenses.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Expenses {
  private financeService = inject(FinanceService);

  expenses = signal<Expense[]>([]);
  startDate = signal<string>('');
  endDate = signal<string>('');

  filteredExpenses = computed(() => {
    const all = this.expenses();
    const from = this.startDate();
    const to = this.endDate();
    return all.filter(e => {
      if (from && e.date < from) return false;
      if (to && e.date > to) return false;
      return true;
    });
  });

  totalExpenses = computed(() =>
    this.filteredExpenses().reduce((sum, e) => sum + e.amount, 0)
  );

  totalRecurring = computed(() =>
    this.filteredExpenses().filter(e => e.recurring).reduce((sum, e) => sum + e.amount, 0)
  );

  constructor() {
    this.financeService
      .getExpenses()
      .pipe(takeUntilDestroyed())
      .subscribe(data => this.expenses.set(data));
  }

  format(amount: number): string {
    return formatCurrency(amount, 'en-US', '$', 'USD');
  }
}
