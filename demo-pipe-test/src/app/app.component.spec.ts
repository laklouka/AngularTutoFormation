import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomPipe
      ],
    }).compileComponents();
  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'abadi ihab'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('abadi ihab');
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.test').textContent).toContain('toto');
  });
});
