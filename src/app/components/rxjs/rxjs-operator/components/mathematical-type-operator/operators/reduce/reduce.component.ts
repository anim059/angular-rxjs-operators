import { Component, signal } from '@angular/core';
import { delay, of, reduce } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'reduce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reduce.component.html',
  styleUrl: './reduce.component.scss'
})
export class ReduceComponent {

  items: any = [
    { name: 'Apple', price: 10 },
    { name: 'Banana', price: 20 },
    { name: 'Orange', price: 150 }
  ]

  sourceObservable = of(
    { name: 'Apple', price: 10 },
    { name: 'Banana', price: 20 },
    { name: 'Orange', price: 150 }
  );

  subscription: any;

  value: string = '';

  isProcessing = signal<boolean>(false);

  startOperator(): void {
    this.value = '';
    this.isProcessing.set(true);
    this.subscription = this.sourceObservable
      .pipe(
        delay(1000),
        reduce((total, item) => total + item.price, 0),
      )
      .subscribe({
        next: (value: any) => {
          this.value = value;
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
        complete: () => {
          this.isProcessing.set(false);
        }
      });
  }

  stopOperator(): void {
    this.isProcessing.set(false);
    this.subscription.unsubscribe();
    this.value = '';
  }


}
