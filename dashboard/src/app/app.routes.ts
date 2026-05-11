import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'finance', pathMatch: 'full' },
  {
    path: 'finance',
    loadComponent: () => import('./pages/finance/finance').then(m => m.Finance),
    children: [
      { path: '', redirectTo: 'expenses', pathMatch: 'full' },
      {
        path: 'expenses',
        loadComponent: () => import('./pages/finance/expenses/expenses').then(m => m.Expenses),
      },
    ],
  },
  {
    path: 'crypto',
    loadComponent: () => import('./pages/crypto/crypto').then(m => m.Crypto),
  },
  {
    path: 'health',
    loadComponent: () => import('./pages/health/health').then(m => m.Health),
  },
];
