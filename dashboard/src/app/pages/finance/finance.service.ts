import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from './finance.models';
import { environment } from '../../../environments/environment';

const EXPENSES: Expense[] = [
  { id: '1',  date: '2026-03-03', merchant: 'AWS',             category: 'Infrastructure', amount: 312.45,  currency: 'USD', recurring: true  },
  { id: '2',  date: '2026-03-05', merchant: 'Figma',           category: 'Software',       amount: 45.00,   currency: 'USD', recurring: true  },
  { id: '3',  date: '2026-03-10', merchant: 'Spotify',         category: 'Software',       amount: 9.99,    currency: 'USD', recurring: true  },
  { id: '4',  date: '2026-03-12', merchant: 'Notion',          category: 'Software',       amount: 16.00,   currency: 'USD', recurring: true  },
  { id: '5',  date: '2026-03-15', merchant: 'Delta Airlines',  category: 'Travel',         amount: 487.00,  currency: 'USD', recurring: false },
  { id: '6',  date: '2026-03-18', merchant: 'WeWork',          category: 'Office',         amount: 800.00,  currency: 'USD', recurring: true  },
  { id: '7',  date: '2026-03-22', merchant: 'Whole Foods',     category: 'Meals',          amount: 74.30,   currency: 'USD', recurring: false },
  { id: '8',  date: '2026-03-28', merchant: 'GitHub',          category: 'Software',       amount: 21.00,   currency: 'USD', recurring: true  },
  { id: '9',  date: '2026-04-01', merchant: 'AWS',             category: 'Infrastructure', amount: 289.10,  currency: 'USD', recurring: true  },
  { id: '10', date: '2026-04-03', merchant: 'Figma',           category: 'Software',       amount: 45.00,   currency: 'USD', recurring: true  },
  { id: '11', date: '2026-04-07', merchant: 'Uber Eats',       category: 'Meals',          amount: 28.90,   currency: 'USD', recurring: false },
  { id: '12', date: '2026-04-09', merchant: 'Stripe',          category: 'Infrastructure', amount: 134.00,  currency: 'USD', recurring: false },
  { id: '13', date: '2026-04-12', merchant: 'GitHub',          category: 'Software',       amount: 21.00,   currency: 'USD', recurring: true  },
  { id: '14', date: '2026-04-15', merchant: 'WeWork',          category: 'Office',         amount: 800.00,  currency: 'USD', recurring: true  },
  { id: '15', date: '2026-04-18', merchant: 'Mailchimp',       category: 'Marketing',      amount: 55.00,   currency: 'USD', recurring: true  },
  { id: '16', date: '2026-04-21', merchant: 'Zoom',            category: 'Software',       amount: 14.99,   currency: 'USD', recurring: true  },
  { id: '17', date: '2026-04-25', merchant: 'FedEx',           category: 'Logistics',      amount: 38.50,   currency: 'USD', recurring: false },
  { id: '18', date: '2026-04-29', merchant: 'Adobe',           category: 'Software',       amount: 54.99,   currency: 'USD', recurring: true  },
  { id: '19', date: '2026-05-01', merchant: 'AWS',             category: 'Infrastructure', amount: 312.45,  currency: 'USD', recurring: true  },
  { id: '20', date: '2026-05-02', merchant: 'Figma',           category: 'Software',       amount: 45.00,   currency: 'USD', recurring: true  },
  { id: '21', date: '2026-05-03', merchant: 'Uber Eats',       category: 'Meals',          amount: 32.40,   currency: 'USD', recurring: false },
  { id: '22', date: '2026-05-05', merchant: 'GitHub',          category: 'Software',       amount: 21.00,   currency: 'USD', recurring: true  },
  { id: '23', date: '2026-05-07', merchant: 'WeWork',          category: 'Office',         amount: 800.00,  currency: 'USD', recurring: true  },
  { id: '24', date: '2026-05-08', merchant: 'Vercel',          category: 'Infrastructure', amount: 20.00,   currency: 'USD', recurring: true  },
  { id: '25', date: '2026-05-09', merchant: 'Notion',          category: 'Software',       amount: 16.00,   currency: 'USD', recurring: true  },
  { id: '26', date: '2026-05-10', merchant: 'Grubhub',         category: 'Meals',          amount: 41.75,   currency: 'USD', recurring: false },
  { id: '27', date: '2026-05-11', merchant: 'LinkedIn Ads',    category: 'Marketing',      amount: 220.00,  currency: 'USD', recurring: false },
];

@Injectable({ providedIn: 'root' })
export class FinanceService {
  // TODO: inject HttpClient and replace with this.http.get<Expense[]>(`${this.apiUrl}/expenses`)
  private readonly apiUrl = `${environment.apiUrl}/finance`;

  getExpenses(): Observable<Expense[]> {
    return of(EXPENSES);
  }
}
