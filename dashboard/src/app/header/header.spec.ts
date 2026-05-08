import { TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the DRGS brand text', async () => {
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const span = fixture.nativeElement.querySelector('span');
    expect(span?.textContent).toContain('DRGS');
  });
});
