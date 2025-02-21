import { Component, signal } from '@angular/core';
import { delay, map, of, pairwise } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'pairwise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pairwise.component.html',
  styleUrl: './pairwise.component.scss'
})
export class PairwiseComponent {

  numbers$ = of(1, 2, 3, 2, 1, 0, 1, 2)

  subscription: any;

  values: string[] = [];

  isProcessing = signal<boolean>(false);

  startOperator(): void {
    this.values = [];
    this.isProcessing.set(true);
    this.subscription = this.numbers$.pipe(
      pairwise(),
      map(([prev, curr]) => {
        if (curr > prev) return `Increasing ${prev} -> ${curr}`;
        if (curr < prev) return `Decreasing ${prev} -> ${curr}`;
        return 'No Change';
      })
    ).subscribe({
      next: (direction) => {
        this.values.push(`Direction:, ${direction}`);
      },
      error: () => {

      },
      complete: () => {
        this.isProcessing.set(false);
      }
    })
  }

  stopOperator(): void {
    this.isProcessing.set(false);
    this.subscription.unsubscribe();
    this.values = [];
  }


}
