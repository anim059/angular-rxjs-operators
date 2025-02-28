import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { Observable, Subject, Subscription, debounceTime, delay, filter, fromEvent, interval, map, of, switchMap, takeUntil, tap, timer, toArray } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'to-array',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent {

  source$ = interval(500);

  results: number[] = [];

  subscription !: Subscription;

  isProcessing = signal<boolean>(false);

  startOperator() {
    this.isProcessing.set(true);
    this.subscription = this.source$.pipe(
      takeUntil(timer(3000)), // Stop after 3 seconds
      toArray()
    ).subscribe((values) => {
      this.isProcessing.set(false);
      this.results = values;
    });
  }

  stopOperator() {
    this.isProcessing.set(false);
    this.results = [];
    this.subscription.unsubscribe();
  }
}
