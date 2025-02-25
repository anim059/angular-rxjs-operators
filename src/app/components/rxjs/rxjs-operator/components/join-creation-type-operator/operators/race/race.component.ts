import { Component, signal } from '@angular/core';
import { Observable, Subscription, delay, interval, map, of, race, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss'
})
export class RaceComponent {

  delay: number = 0;

  httpRequest$ !: Observable<any>;

  timeout$ = interval(3000).pipe(
    switchMap(() => throwError(() => new Error('Request timed out')))
  );

  subscription !: Subscription;

  isProcessing = signal<boolean>(false);

  result: string = '';

  startOperator(): void {
    this.delay = Math.floor((Math.random() * 5) + 1) * 1000;
    this.httpRequest$ = of(`Details of a user in ${this.delay / 1000} seconds`).pipe(
      delay(this.delay)
    )
    this.isProcessing.set(true);
    this.subscription = race(this.httpRequest$, this.timeout$).subscribe({
      next: (response) => {
        this.isProcessing.set(false);
        this.result = response;
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.result = err;
      },
    });
  }

  stopOperator(): void {
    this.isProcessing.set(false);
    this.subscription.unsubscribe();
  }


}
