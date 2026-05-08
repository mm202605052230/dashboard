import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavItem } from './nav-item';

describe('NavItem', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavItem],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NavItem);
    fixture.componentRef.setInput('label', 'Finance');
    fixture.componentRef.setInput('route', '/finance');
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the label', async () => {
    const fixture = TestBed.createComponent(NavItem);
    fixture.componentRef.setInput('label', 'Finance');
    fixture.componentRef.setInput('route', '/finance');
    await fixture.whenStable();
    const span = fixture.nativeElement.querySelector('span:last-child');
    expect(span?.textContent?.trim()).toBe('Finance');
  });

  it('should set the correct routerLink', async () => {
    const fixture = TestBed.createComponent(NavItem);
    fixture.componentRef.setInput('label', 'Crypto');
    fixture.componentRef.setInput('route', '/crypto');
    await fixture.whenStable();
    const anchor = fixture.nativeElement.querySelector('a');
    expect(anchor?.getAttribute('href')).toBe('/crypto');
  });
});
