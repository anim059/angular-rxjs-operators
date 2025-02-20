import { Component, signal } from '@angular/core';
import { Observable, concatMap, delay, of } from 'rxjs';

@Component({
  selector: 'concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent {

  sourceObservable = of(1, 2, 3);

  resultObservable: any;

  subscription: any;

  values: string[] = [];

  isProcessing = signal<boolean>(false);

  fetchDetails(id: number): Observable<any> {
    let rnum = Math.floor((Math.random() * 4)) + 2;
    return of(`Details for ID ${id} in ${rnum} seconds`).pipe(delay(rnum * 1000)); // Simulate a 1-second delay
  }

  startOperator(): void {
    this.isProcessing.set(true);
    this.resultObservable = this.sourceObservable.pipe(
      concatMap((val) => {
        return this.fetchDetails(val);
      })
    );
    this.subscription = this.resultObservable.subscribe({
      next: (value: any) => {
        this.isProcessing.set(false);
        this.values.push(value);
      },
      error: (error: any) => {
        console.error('Error:', error);
      },
    });
  }

  stopOperator(): void {
    this.subscription.unsubscribe();
    this.values = [];
  }

}
