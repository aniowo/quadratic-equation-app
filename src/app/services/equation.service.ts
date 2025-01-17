// filepath: src/app/equation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquationService {
  calculateRoots(a: number, b: number, c: number): { root1: number | null; root2: number | null; message: string | null } {
    const discriminant = b * b - 4 * a * c;
    let root1: number | null = null;
    let root2: number | null = null;
    let message: string | null = null;

    if (discriminant > 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant === 0) {
      root1 = root2 = -b / (2 * a);
    } else {
      message = 'The equation has no real solutions.';
    }

    return { root1, root2, message };
  }
}
