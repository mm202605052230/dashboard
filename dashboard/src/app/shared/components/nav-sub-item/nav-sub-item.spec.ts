import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavSubItem } from './nav-sub-item';

describe('NavSubItem', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSubItem],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NavSubItem);
    fixture.componentRef.setInput('label', 'Expenses');
    fixture.componentRef.setInput('route', '/finance/expenses');
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the label', async () => {
    const fixture = TestBed.createComponent(NavSubItem);
    fixture.componentRef.setInput('label', 'Expenses');
    fixture.componentRef.setInput('route', '/finance/expenses');
    await fixture.whenStable();
    const span = fixture.nativeElement.querySelector('span:last-child');
    expect(span?.textContent?.trim()).toBe('Expenses');
  });

  it('should set the correct href', async () => {
    const fixture = TestBed.createComponent(NavSubItem);
    fixture.componentRef.setInput('label', 'Expenses');
    fixture.componentRef.setInput('route', '/finance/expenses');
    await fixture.whenStable();
    const anchor = fixture.nativeElement.querySelector('a');
    expect(anchor?.getAttribute('href')).toBe('/finance/expenses');
  });
});
