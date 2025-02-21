import { Component, signal } from '@angular/core';
import { Observable, of, scan } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'scan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.scss'
})
export class ScanComponent {

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

  values: string[] = [];

  isProcessing = signal<boolean>(false);

  startOperator(): void {
    this.values = [];
    this.isProcessing.set(true);
    this.subscription = this.sourceObservable
      .pipe(
        scan((total, item) => total + item.price, 0),
      )
      .subscribe({
        next: (value: any) => {
          this.values.push(value);
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
    this.values = [];
  }


}
