import { Component, signal } from '@angular/core';
import { interval, of } from 'rxjs';
import { map, mergeScan, take } from 'rxjs/operators';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'merge-scan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge-scan.component.html',
  styleUrl: './merge-scan.component.scss'
})
export class MergeScanComponent {

  transactions$ = interval(1000).pipe(
    take(5), // Simulate 5 transactions
    map((i) => (i % 2 === 0 ? 100 : -50)) // Alternate between +100 and -50
  );

  initialBalance = 0;

  subscription: any;

  results: string[] = [];

  isProcessing = signal<boolean>(false);

  startOperator(): void {
    this.results = [];
    this.isProcessing.set(true);
    this.subscription = this.transactions$.pipe(
      mergeScan((acc, transaction) => {
        // Simulate an asynchronous operation (e.g., updating the balance in a database)
        return of(acc + transaction);
      }, this.initialBalance)
    ).subscribe({
      next:(res)=>{
        this.results.push(`Current Balance: ${res}`);
      },
      error:(err)=>{

      },
      complete:()=>{
        this.isProcessing.set(false);
      }
    })
  }

  clearOperator(): void{
    this.isProcessing.set(false);
    this.subscription.unsubscribe();
    this.results = [];
  }

}
