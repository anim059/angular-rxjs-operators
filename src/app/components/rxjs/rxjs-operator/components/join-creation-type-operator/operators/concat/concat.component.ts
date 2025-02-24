import { Component, signal } from '@angular/core';
import { Observable, concat, delay, of, throwError } from 'rxjs';

@Component({
  selector: 'concat',
  standalone: true,
  imports: [],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.scss'
})
export class ConcatComponent {

  fetchUserDetails = () => of('User Details Response after 3s').pipe(delay(3000));

  fetchUserCartInfo = () => of('User Cart Response after 2s').pipe(delay(2000));

  fetchUserOrders = () => new Observable(observer => {
    observer.error(new Error('Forced failure!'));
  });

  fetchPreferences = () => of('User Preferences Response after 1s').pipe(delay(3000));

  subscription: any;

  isProcessing = signal<boolean>(false);

  results: string[] = [];

  startOperator(): void {
    this.isProcessing.set(true);
    this.subscription = concat(this.fetchUserDetails(), this.fetchUserCartInfo(), this.fetchUserOrders(), this.fetchPreferences()).subscribe({
      next: (response: any) => {
        this.isProcessing.set(false);
        this.results.push(response);
      },
      error: (error) => {
        this.results.push('Failed to fetch ');
      }
    });
  }

  stopOperator(): void {
    this.results = [];
    this.isProcessing.set(false);
    this.subscription.unsubscribe();
  }

}
