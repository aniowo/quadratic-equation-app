import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraticCalculatorComponent } from './quadratic-calculator.component';

describe('QuadraticCalculatorComponent', () => {
  let component: QuadraticCalculatorComponent;
  let fixture: ComponentFixture<QuadraticCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadraticCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadraticCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
