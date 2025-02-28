import { Component, signal } from '@angular/core';
import { Observable, Subscription, delay, of, timeInterval } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'time-interval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-interval.component.html',
  styleUrl: './time-interval.component.scss'
})
export class TimeIntervalComponent {

  source$ !: Observable<any>;

  isProcessing = signal<boolean>(false);

  values: any[] = []

  subscription !: Subscription;

  startOperator() {
    this.values = [];
    this.source$ = of(1, 2, 3).pipe(delay(Math.floor((Math.random() * 3) + 1) * 1000));
    this.isProcessing.set(true);
    this.subscription = this.source$.pipe(timeInterval()).subscribe({
      next: (res) => {
        this.isProcessing.set(false);
        this.values.push(res);
      },
      error: () => {
        this.isProcessing.set(false);
      }
    })
  }

  stopOperator() {
    this.subscription.unsubscribe();
    this.isProcessing.set(false);
    this.values = [];
  }
}
