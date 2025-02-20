import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { Observable, delay, exhaustMap, fromEvent, of } from 'rxjs';

@Component({
  selector: 'exhaust-map',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent {

  @ViewChild('start') startButton!: ElementRef;

  subscription: any;

  value: string = '';

  isProcessing = signal<boolean>(false);

  fetchDetails(): Observable<any> {
    let rnum = Math.floor((Math.random() * 4)) + 2;
    return of(`HTTP Response in ${rnum} seconds`).pipe(delay(rnum * 1000)); // Simulate a 1-second delay
  }

  ngAfterViewInit() {
    const startButtonElement = this.startButton.nativeElement;
    const click$ = fromEvent(startButtonElement, 'click');
    this.subscription = click$.pipe(
      exhaustMap(() => {
        this.isProcessing.set(true);
        return this.fetchDetails()
      })
    ).subscribe({
      next: (value) => {
        this.isProcessing.set(false);
        this.value = value;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  stopOperator(): void {
    this.subscription.unsubscribe();
    this.value = '';
  }

}
