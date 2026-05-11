import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { FinanceService } from './finance.service';

describe('FinanceService', () => {
  let service: FinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable', async () => {
    const expenses = await firstValueFrom(service.getExpenses());
    expect(expenses).toBeDefined();
  });

  it('should return 27 expenses', async () => {
    const expenses = await firstValueFrom(service.getExpenses());
    expect(expenses).toHaveLength(27);
  });

  it('should return expenses with the correct shape', async () => {
    const expenses = await firstValueFrom(service.getExpenses());
    const first = expenses[0];
    expect(first).toHaveProperty('id');
    expect(first).toHaveProperty('date');
    expect(first).toHaveProperty('merchant');
    expect(first).toHaveProperty('category');
    expect(first).toHaveProperty('amount');
    expect(first).toHaveProperty('currency');
    expect(first).toHaveProperty('recurring');
  });

  it('should include both recurring and non-recurring expenses', async () => {
    const expenses = await firstValueFrom(service.getExpenses());
    expect(expenses.some(e => e.recurring)).toBe(true);
    expect(expenses.some(e => !e.recurring)).toBe(true);
  });

  it('should return expenses sorted by date ascending', async () => {
    const expenses = await firstValueFrom(service.getExpenses());
    for (let i = 1; i < expenses.length; i++) {
      expect(expenses[i].date >= expenses[i - 1].date).toBe(true);
    }
  });
});
