import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject, debounceTime, filter, fromEvent, map, max, switchMap, toArray } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'max',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './max.component.html',
  styleUrl: './max.component.scss'
})
export class MaxComponent implements OnInit, AfterViewInit {

  @ViewChild('userInput') userInputRef!: ElementRef;

  private inputSubject = new Subject<void>();

  maxValue: number | null = null;

  ngOnInit(): void {
    this.inputSubject.pipe(
      switchMap(() =>
        fromEvent<InputEvent>(this.userInputRef.nativeElement, 'input').pipe(
          debounceTime(500),
          map(event => parseFloat((event.target as HTMLInputElement).value)),
          filter(value => !isNaN(value)),
          toArray(),
          max() // Get max value
        )
      )
    ).subscribe(maxVal => {
      this.maxValue = maxVal[0]; // Access first element since max() returns array
    });
  }

  ngAfterViewInit(): void {
    this.inputSubject.next();
  }

  clearInputs(): void {
    this.maxValue = null;
    this.userInputRef.nativeElement.value = '';
    this.inputSubject.next();
  }
}
