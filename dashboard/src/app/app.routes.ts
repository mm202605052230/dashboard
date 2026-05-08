import { Routes } from '@angular/router';
import { Finance } from './pages/finance/finance';
import { Crypto } from './pages/crypto/crypto';
import { Health } from './pages/health/health';

export const routes: Routes = [
  { path: '', redirectTo: 'finance', pathMatch: 'full' },
  { path: 'finance', component: Finance },
  { path: 'crypto', component: Crypto },
  { path: 'health', component: Health },
];
