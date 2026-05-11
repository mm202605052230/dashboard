import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Expenses } from './expenses';
import { FinanceService } from '../finance.service';
import { Expense } from '../finance.models';

const MOCK_EXPENSES: Expense[] = [
  { id: '1', date: '2026-03-01', merchant: 'AWS',    category: 'Infrastructure', amount: 100, currency: 'USD', recurring: true  },
  { id: '2', date: '2026-04-01', merchant: 'Figma',  category: 'Software',       amount: 50,  currency: 'USD', recurring: false },
  { id: '3', date: '2026-05-01', merchant: 'WeWork', category: 'Office',         amount: 200, currency: 'USD', recurring: true  },
];

describe('Expenses', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expenses],
      providers: [
        provideRouter([]),
        { provide: FinanceService, useValue: { getExpenses: () => of(MOCK_EXPENSES) } },
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Expenses);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should load expenses from the service', () => {
    const fixture = TestBed.createComponent(Expenses);
    expect(fixture.componentInstance.expenses()).toHaveLength(3);
  });

  it('should show all expenses when no date filter is set', () => {
    const fixture = TestBed.createComponent(Expenses);
    expect(fixture.componentInstance.filteredExpenses()).toHaveLength(3);
  });

  it('should filter out expenses before the start date', () => {
    const fixture = TestBed.createComponent(Expenses);
    const comp = fixture.componentInstance;
    comp.startDate.set('2026-04-01');
    expect(comp.filteredExpenses()).toHaveLength(2);
    expect(comp.filteredExpenses().map(e => e.merchant)).toEqual(['Figma', 'WeWork']);
  });

  it('should filter out expenses after the end date', () => {
    const fixture = TestBed.createComponent(Expenses);
    const comp = fixture.componentInstance;
    comp.endDate.set('2026-03-31');
    expect(comp.filteredExpenses()).toHaveLength(1);
    expect(comp.filteredExpenses()[0].merchant).toBe('AWS');
  });

  it('should filter expenses within a date range', () => {
    const fixture = TestBed.createComponent(Expenses);
    const comp = fixture.componentInstance;
    comp.startDate.set('2026-04-01');
    comp.endDate.set('2026-04-30');
    expect(comp.filteredExpenses()).toHaveLength(1);
    expect(comp.filteredExpenses()[0].merchant).toBe('Figma');
  });

  it('should compute the total of all filtered expenses', () => {
    const fixture = TestBed.createComponent(Expenses);
    expect(fixture.componentInstance.totalExpenses()).toBe(350);
  });

  it('should compute the total of recurring filtered expenses', () => {
    const fixture = TestBed.createComponent(Expenses);
    expect(fixture.componentInstance.totalRecurring()).toBe(300);
  });

  it('should recompute totals reactively when the date filter changes', () => {
    const fixture = TestBed.createComponent(Expenses);
    const comp = fixture.componentInstance;
    comp.startDate.set('2026-04-01');
    expect(comp.totalExpenses()).toBe(250);
    expect(comp.totalRecurring()).toBe(200);
  });
});
