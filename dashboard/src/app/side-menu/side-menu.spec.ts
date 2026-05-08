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

  it('should render all three nav items', async () => {
    const fixture = TestBed.createComponent(SideMenu);
    await fixture.whenStable();
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(3);
  });

  it('should include Finance, Crypto and Health labels', async () => {
    const fixture = TestBed.createComponent(SideMenu);
    await fixture.whenStable();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Finance');
    expect(text).toContain('Crypto');
    expect(text).toContain('Health');
  });
});
