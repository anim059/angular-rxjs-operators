import { Component, signal } from '@angular/core';
import { delay, forkJoin, map, merge, of } from 'rxjs';

@Component({
  selector: 'merge',
  standalone: true,
  imports: [],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss'
})
export class MergeComponent {

  fetchUserDetails = () => of('User Details info in 2s').pipe(delay(2000)); // Simulate a 1-second delay

  fetchUserOrders = () => of('User Orders info in 1s').pipe(delay(1000)); // Simulate a 1.5-second delay

  fetchUserPreferences = () => of('User Preferences info in 3s').pipe(delay(3000)); // Simulate a 0.5-second delay

  mergedSubs$: any;

  isProcessing = signal<boolean>(false);

  results: string[] = [];

  startOperator(): void {
    this.results = [];
    this.isProcessing.set(true);
    this.mergedSubs$ = merge(
      this.fetchUserPreferences(),
      this.fetchUserDetails(),
      this.fetchUserOrders(),
    ).subscribe({
      next: (res) => {
        this.isProcessing.set(false);
        this.results.push(res);
      }
    });
  }

  stopOperator(): void {
    this.results = [];
    this.isProcessing.set(false);
    this.mergedSubs$.unsubscribe();
  }
}
