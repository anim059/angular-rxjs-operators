import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Observable, Subject, delay, exhaustMap, of, takeUntil } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'exhaust-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent implements OnInit, OnDestroy {

  private start$ = new Subject<void>();

  private destroy$ = new Subject<void>();

  isProcessing = signal<boolean>(false);

  value: any;

  constructor() {
  }
  ngOnInit(): void {
    // Handle API call with exhaustMap
    this.start$.pipe(
      takeUntil(this.destroy$), // Cleanup on destroy
      exhaustMap(() => {
        this.isProcessing.set(true);
        return this.fetchDetails();
      })
    ).subscribe({
      next: (value) => {
        this.isProcessing.set(false);
        this.value = value;
      },
      error: (error) => {
        this.isProcessing.set(false);
        console.error(error);
      }
    });
  }

  startOperator(): void {
    this.start$.next(); // Triggers API call (if not already running)
  }

  clearOperator(): void {
    this.isProcessing.set(false);
    this.value = '';
  }

  fetchDetails(): Observable<any> {
    let rnum = Math.floor((Math.random() * 4)) + 2;
    return of(`HTTP Response in ${rnum} seconds`).pipe(delay(rnum * 1000)); // Simulate a 1-second delay
  }

  ngOnDestroy(): void {
    this.start$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

}
