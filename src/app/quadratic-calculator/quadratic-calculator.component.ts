// filepath: src/app/quadratic-calculator/quadratic-calculator.component.ts
import { Component } from '@angular/core';
import { EquationService } from '../services/equation.service';

@Component({
  selector: 'app-quadratic-calculator',
  standalone: false,
  templateUrl: './quadratic-calculator.component.html',
  styleUrls: ['./quadratic-calculator.component.css']
})
export class QuadraticCalculatorComponent {
  a: number | null = null;
  b: number | null = null;
  c: number | null = null;
  root1: number | null = null;
  root2: number | null = null;
  message: string | null = null;

  constructor(private equationService: EquationService) {}

  calculate() {
    if (this.a === null || this.b === null || this.c === null) {
      this.message = 'Please provide valid values for a, b, and c.';
      this.root1 = null;
      this.root2 = null;
      return;
    }

    const result = this.equationService.calculateRoots(this.a, this.b, this.c);
    this.root1 = result.root1;
    this.root2 = result.root2;
    this.message = result.message;
  }
}
