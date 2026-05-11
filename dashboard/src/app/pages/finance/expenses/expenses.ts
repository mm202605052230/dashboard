import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, formatCurrency } from '@angular/common';
import { FinanceService } from '../finance.service';
import { Expense } from '../finance.models';
import { SummaryCard } from '../../../shared/components/summary-card/summary-card';

@Component({
  selector: 'app-expenses',
  imports: [CurrencyPipe, DatePipe, SummaryCard],
  templateUrl: './expenses.html',
})
export class Expenses implements OnInit {
  private financeService = inject(FinanceService);

  expenses = signal<Expense[]>([]);

  totalExpenses = computed(() =>
    this.expenses().reduce((sum, e) => sum + e.amount, 0)
  );

  totalRecurring = computed(() =>
    this.expenses().filter(e => e.recurring).reduce((sum, e) => sum + e.amount, 0)
  );

  format(amount: number) {
    return formatCurrency(amount, 'en-US', '$', 'USD');
  }

  ngOnInit() {
    this.financeService.getExpenses().subscribe(data => this.expenses.set(data));
  }
}
