import { Routes } from '@angular/router';
import { Finance } from './pages/finance/finance';
import { Expenses } from './pages/finance/expenses/expenses';
import { Crypto } from './pages/crypto/crypto';
import { Health } from './pages/health/health';

export const routes: Routes = [
  { path: '', redirectTo: 'finance', pathMatch: 'full' },
  {
    path: 'finance',
    component: Finance,
    children: [
      { path: '', redirectTo: 'expenses', pathMatch: 'full' },
      { path: 'expenses', component: Expenses },
    ],
  },
  { path: 'crypto', component: Crypto },
  { path: 'health', component: Health },
];
