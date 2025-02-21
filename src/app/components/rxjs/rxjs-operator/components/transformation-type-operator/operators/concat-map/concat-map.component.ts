import { Component, signal } from '@angular/core';
import { Observable, concatMap, delay, of } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'concat-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent {

  sourceObservable = of(1, 2, 3, 4);

  resultObservable: any;

  subscription: any;

  values: string[] = [];

  isProcessing = signal<boolean>(false);

  fetchDetails(id: number): Observable<any> {
    let rnum = Math.floor((Math.random() * 4)) + 2;
    return of(`Details for ID ${id} in ${rnum} seconds`).pipe(delay(rnum * 1000)); // Simulate a 1-second delay
  }

  startOperator(): void {
    this.values = [];
    this.isProcessing.set(true);
    this.resultObservable = this.sourceObservable.pipe(
      concatMap((val) => {
        return this.fetchDetails(val);
      })
    );
    this.subscription = this.resultObservable.subscribe({
      next: (value: any) => {
        this.values.push(value);
      },
      error: (error: any) => {
        console.error('Error:', error);
      },
      complete:()=>{
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
