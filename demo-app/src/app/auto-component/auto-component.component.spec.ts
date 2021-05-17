import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoComponentComponent } from './auto-component.component';

describe('AutoComponentComponent', () => {
  let component: AutoComponentComponent;
  let fixture: ComponentFixture<AutoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
