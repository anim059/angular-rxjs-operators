import { Component, signal } from '@angular/core';
import { Observable, Subscription, delay, of } from 'rxjs';

@Component({
  selector: 'delay',
  standalone: true,
  imports: [],
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.scss'
})
export class DelayComponent {

  data: string | null = null;

  subscription !: Subscription;

  isProcessing = signal<boolean>(false);

  getDelayedData(): Observable<string> {
    return of('Response after 2s delay').pipe(delay(2000)); // Delay of 2 seconds
  }

  startOperator(): void {
    this.isProcessing.set(true);
    this.subscription = this.getDelayedData().subscribe((result) => {
      this.isProcessing.set(false);
      this.data = result;
    });
  }

  stopOperator(): void {
    this.subscription.unsubscribe();
  }
}
