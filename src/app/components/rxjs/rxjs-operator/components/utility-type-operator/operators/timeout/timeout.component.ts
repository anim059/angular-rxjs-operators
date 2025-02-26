import { Component, signal } from '@angular/core';
import { Observable, Subscription, delay, of, timeout } from 'rxjs';

@Component({
  selector: 'timeout',
  standalone: true,
  imports: [],
  templateUrl: './timeout.component.html',
  styleUrl: './timeout.component.scss'
})
export class TimeoutComponent {

  delay: number = 0;

  httpRequest$ !: Observable<any>;

  isProcessing = signal<boolean>(false);

  result: string = '';

  subscription !: Subscription;

  startOperator(): void {
    this.delay = Math.floor((Math.random() * 5) + 1) * 1000;
    this.httpRequest$ = of(`API Response in ${this.delay / 1000} seconds`).pipe(
      delay(this.delay)
    )
    this.isProcessing.set(true);
    this.subscription = this.httpRequest$.pipe(timeout(3000)).subscribe({
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
    this.result = '';
    this.isProcessing.set(false);
    this.subscription.unsubscribe();
  }


}
