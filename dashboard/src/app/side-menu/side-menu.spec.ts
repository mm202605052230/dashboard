import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SideMenu } from './side-menu';

describe('SideMenu', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenu],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SideMenu);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render all four nav links', async () => {
    const fixture = TestBed.createComponent(SideMenu);
    await fixture.whenStable();
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(4);
  });

  it('should include Finance, Expenses, Crypto and Health labels', async () => {
    const fixture = TestBed.createComponent(SideMenu);
    await fixture.whenStable();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Finance');
    expect(text).toContain('Expenses');
    expect(text).toContain('Crypto');
    expect(text).toContain('Health');
  });

  it('should have a labelled nav landmark', async () => {
    const fixture = TestBed.createComponent(SideMenu);
    await fixture.whenStable();
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');
  });
});
