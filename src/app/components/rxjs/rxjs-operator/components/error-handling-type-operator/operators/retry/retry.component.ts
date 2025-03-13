import { Component, signal } from '@angular/core';
import { Subscription, interval, mergeMap, of, retry, throwError } from 'rxjs';

@Component({
  selector: 'retry',
  standalone: true,
  imports: [],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.scss'
})
export class RetryComponent {

  results: string[] = [];

  source$ = interval(1000);

  result$ = this.source$.pipe(
    mergeMap(val => val > 5 ? throwError(() => 'Error!') : of(val)),
    retry(2)
  );

  isProcessing = signal<boolean>(false);

  subscribtion !: Subscription;

  startOperator(): void {
    this.isProcessing.set(true);
    this.subscribtion = this.result$.subscribe({
      next: value => {
        this.isProcessing.set(false);
        this.results.push(`value: ${value}`)
        if (value === 5) this.results.push('Error!, Retrying...');
      },
      error: err => {
        this.isProcessing.set(false);
        this.results.push(`${err}: Retried 2 times then quit!`);
      }
    });
  }

  stopOperator(): void {
    this.results = [];
    this.subscribtion.unsubscribe();
  }
}
