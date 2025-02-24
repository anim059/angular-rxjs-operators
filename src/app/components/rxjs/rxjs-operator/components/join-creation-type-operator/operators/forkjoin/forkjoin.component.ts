import { Component, signal } from '@angular/core';
import { catchError, delay, forkJoin, map, of } from 'rxjs';

@Component({
  selector: 'forkjoin',
  standalone: true,
  imports: [],
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.scss'
})
export class ForkjoinComponent {

  fetchUserDetails = () => of('User Details').pipe(delay(2000)); // Simulate a 1-second delay
  fetchUserOrders = () => of('User Orders').pipe(delay(1000)); // Simulate a 1.5-second delay
  fetchUserPreferences = () => of('User Preferences').pipe(delay(1500)); // Simulate a 0.5-second delay

  fetchWithError = () => of(null).pipe(
    delay(2000),
    map(() => { throw new Error('Failed to fetch data'); })
  );

  combined$: any;

  isProcessing = signal<boolean>(false);

  isProcessing2 = signal<boolean>(false);

  results: any;

  results2: any;

  startOperator(): void {
    this.results = {};
    this.isProcessing.set(true);
    this.combined$ = forkJoin({
      userDetails: this.fetchUserDetails(),
      userOrders: this.fetchUserOrders(),
      userPreferences: this.fetchUserPreferences(),
    }).subscribe({
      next: (res) => {
        this.isProcessing.set(false);
        console.log('Results:', res);
        this.results = res;
      }
    });
  }

  startOperator2(): void {
    this.results2 = {};
    this.isProcessing2.set(true);
    this.combined$ = forkJoin({
      userDetails: this.fetchUserDetails(),
      userOrders: this.fetchUserOrders(),
      additionalData: this.fetchWithError(),
      userPreferences: this.fetchUserPreferences(),
    }).subscribe({
      next: (res) => {
        this.isProcessing2.set(false);
        this.results2 = res;
      },
      error: (error) => {
        this.isProcessing2.set(false);
        this.results2 = 'Failed to fetch data one of the request';
      }
    });
  }

  stopOperator(): void {
    this.results = {};
    this.results2 = null;
    this.isProcessing.set(false);
    this.isProcessing2.set(false);
    this.combined$.unsubscribe();
  }

}
