import { TestBed } from '@angular/core/testing';
import { SummaryCard } from './summary-card';

describe('SummaryCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryCard],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SummaryCard);
    fixture.componentRef.setInput('label', 'Total');
    fixture.componentRef.setInput('value', '$0.00');
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the label', async () => {
    const fixture = TestBed.createComponent(SummaryCard);
    fixture.componentRef.setInput('label', 'Total expenses');
    fixture.componentRef.setInput('value', '$100.00');
    await fixture.whenStable();
    const p = fixture.nativeElement.querySelector('p');
    expect(p?.textContent?.trim()).toContain('Total expenses');
  });

  it('should render the value', async () => {
    const fixture = TestBed.createComponent(SummaryCard);
    fixture.componentRef.setInput('label', 'Total expenses');
    fixture.componentRef.setInput('value', '$312.45');
    await fixture.whenStable();
    const ps = fixture.nativeElement.querySelectorAll('p');
    expect(ps[1]?.textContent?.trim()).toBe('$312.45');
  });

  it('should update when the value input changes', async () => {
    const fixture = TestBed.createComponent(SummaryCard);
    fixture.componentRef.setInput('label', 'Total');
    fixture.componentRef.setInput('value', '$100.00');
    await fixture.whenStable();

    fixture.componentRef.setInput('value', '$200.00');
    fixture.detectChanges();

    const ps = fixture.nativeElement.querySelectorAll('p');
    expect(ps[1]?.textContent?.trim()).toBe('$200.00');
  });
});
