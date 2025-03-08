import { combineLatestAll, interval, map, take } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'combine-latest-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combine-latest-all.component.html',
  styleUrl: './combine-latest-all.component.scss'
})
export class CombineLatestAllComponent {

  higherOrder$ = interval(1000).pipe(
    take(2),
    map((i) => interval(1000).pipe(
      map((j) => `Inner ${i}: ${j}`),
      take(3)
    ))
  );

  subscription: any;

  combineLatestAllValues: any[] = [];

  startOperator(): void {
    this.subscription = this.higherOrder$.pipe(combineLatestAll()).subscribe({
      next: (res) => {
        this.combineLatestAllValues.push(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  stopOperator(): void {
    this.combineLatestAllValues = [];
    this.subscription.next();
    this.subscription.unsubscribe();
  }
}
