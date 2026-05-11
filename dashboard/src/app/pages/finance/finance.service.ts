import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from './finance.models';

const EXPENSES: Expense[] = [
  { id: '1', date: '2026-05-01', merchant: 'AWS', category: 'Infrastructure', amount: 312.45, currency: 'USD', recurring: true },
  { id: '2', date: '2026-05-02', merchant: 'Figma', category: 'Software', amount: 45.00, currency: 'USD', recurring: true },
  { id: '3', date: '2026-05-03', merchant: 'Uber Eats', category: 'Meals', amount: 28.90, currency: 'USD', recurring: false },
  { id: '4', date: '2026-05-05', merchant: 'GitHub', category: 'Software', amount: 21.00, currency: 'USD', recurring: true },
  { id: '5', date: '2026-05-07', merchant: 'WeWork', category: 'Office', amount: 800.00, currency: 'USD', recurring: true },
];

@Injectable({ providedIn: 'root' })
export class FinanceService {
  getExpenses(): Observable<Expense[]> {
    return of(EXPENSES);
  }
}
