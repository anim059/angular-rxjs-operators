import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, debounceTime, delay, fromEvent, map, of, switchMap, takeUntil } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'switch-map',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements AfterViewInit {

  @ViewChild('search') searchInput !: ElementRef;

  searchFormControl = new FormControl('');

  subscription: any;

  isProcessing = signal<boolean>(false);

  result: string = '';

  constructor() { }

  ngAfterViewInit(): void {
    this.searchFormControl.valueChanges.pipe(
      debounceTime(300),
      map((value: any) => value),
      switchMap((searchTerm) => {
        this.isProcessing.set(true);
        return this.fetchDetails(searchTerm);
      })
    ).subscribe({
      next: (res) => {
        this.isProcessing.set(false);
        this.result = res;
      },
      error: () => {
      },
      complete: () => {
        // this.isProcessing.set(false);
      }
    })
  }

  ngOnInit(): void {

  }

  clearOperator(): void {
    this.searchFormControl.setValue('');
    this.isProcessing.set(false);
    this.result = '';
  }

  fetchDetails(searchTerm: string): Observable<any> {
    let rnum = Math.floor((Math.random() * 4)) + 2;
    return of(`HTTP Response for ${searchTerm} in ${rnum} seconds`).pipe(delay(rnum * 1000)); // Simulate a 1-second delay
  }

  ngOnDestroy(): void { }

}
