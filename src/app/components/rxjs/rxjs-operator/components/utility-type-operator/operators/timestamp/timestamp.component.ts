import { Component, signal } from '@angular/core';
import { Subscription, interval, take, timestamp } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'timestamp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timestamp.component.html',
  styleUrl: './timestamp.component.scss'
})
export class TimestampComponent {

  source$ = interval(1000).pipe(take(3));

  isProcessing = signal<boolean>(false);

  timestampedValues: any[] = []

  subscription !: Subscription;

  startOperator() {
    this.isProcessing.set(true);
    this.subscription = this.source$.pipe(timestamp())
    .subscribe({
      next: (response) => {
        this.isProcessing.set(false);
        this.timestampedValues.push(response);
      },
      error: (error) => {
        this.isProcessing.set(false);
      }
    })
  }

  stopOperator() {
    this.subscription.unsubscribe();
    this.isProcessing.set(false);
    this.timestampedValues = [];
  }

}
