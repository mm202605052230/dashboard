import { TestBed } from '@angular/core/testing';
import { DateRangeFilter } from './date-range-filter';

describe('DateRangeFilter', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangeFilter],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(DateRangeFilter);
    fixture.componentRef.setInput('startDate', '');
    fixture.componentRef.setInput('endDate', '');
    fixture.componentRef.setInput('total', 10);
    fixture.componentRef.setInput('filtered', 10);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show entry count', async () => {
    const fixture = TestBed.createComponent(DateRangeFilter);
    fixture.componentRef.setInput('startDate', '');
    fixture.componentRef.setInput('endDate', '');
    fixture.componentRef.setInput('total', 27);
    fixture.componentRef.setInput('filtered', 8);
    await fixture.whenStable();
    const span = fixture.nativeElement.querySelector('span');
    expect(span?.textContent?.trim()).toBe('8 of 27 entries');
  });

  it('should not show clear button when no dates are set', async () => {
    const fixture = TestBed.createComponent(DateRangeFilter);
    fixture.componentRef.setInput('startDate', '');
    fixture.componentRef.setInput('endDate', '');
    fixture.componentRef.setInput('total', 10);
    fixture.componentRef.setInput('filtered', 10);
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeNull();
  });

  it('should show clear button when a date is set', async () => {
    const fixture = TestBed.createComponent(DateRangeFilter);
    fixture.componentRef.setInput('startDate', '2026-05-01');
    fixture.componentRef.setInput('endDate', '');
    fixture.componentRef.setInput('total', 10);
    fixture.componentRef.setInput('filtered', 3);
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('button');
    expect(button?.textContent?.trim()).toBe('Clear');
  });

  it('should emit empty strings on clear', async () => {
    const fixture = TestBed.createComponent(DateRangeFilter);
    fixture.componentRef.setInput('startDate', '2026-05-01');
    fixture.componentRef.setInput('endDate', '2026-05-31');
    fixture.componentRef.setInput('total', 10);
    fixture.componentRef.setInput('filtered', 3);
    await fixture.whenStable();

    const startChanges: string[] = [];
    const endChanges: string[] = [];
    fixture.componentInstance.startDateChange.subscribe(v => startChanges.push(v));
    fixture.componentInstance.endDateChange.subscribe(v => endChanges.push(v));

    fixture.nativeElement.querySelector('button').click();
    expect(startChanges).toEqual(['']);
    expect(endChanges).toEqual(['']);
  });
});
