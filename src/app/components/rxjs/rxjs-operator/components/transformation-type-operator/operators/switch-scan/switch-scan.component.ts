import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, delay, interval, map, mergeScan, of, switchScan, take } from 'rxjs';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'switch-scan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switch-scan.component.html',
  styleUrl: './switch-scan.component.scss'
})
export class SwitchScanComponent {

  searchTerms = of('apple', 'banana', 'orange');

  @ViewChild('search') searchInput !: ElementRef;

  searchFormControl = new FormControl('');

  subscription: any;

  results: string[] = [];

  isProcessing = signal<boolean>(false);

  ngOnInit(): void {
    this.results = [];
    this.searchFormControl.valueChanges.pipe(
      debounceTime(300),
      map((value: any) => value),
      switchScan(
        (acc, searchTerm) => {
          return this.fetchSearchResults(searchTerm).pipe(
            map((results) => [...acc, results])
          );
        },
        []
      )
    ).subscribe({
      next: (res: any) => {
        this.isProcessing.set(false);
        this.results.push(`${res}`);
      },
      error: () => {
      },
      complete: () => {
        // this.isProcessing.set(false);
      }
    })
  }

  clearOperator(): void {
    this.searchFormControl.setValue('');
    this.isProcessing.set(false);
    this.results = [];
  }

  fetchSearchResults(searchTerm: string): Observable<any> {
    let rnum = Math.floor((Math.random() * 4)) + 2;
    return of(`HTTP Response for ${searchTerm} in ${rnum} seconds`).pipe(delay(rnum * 1000)); // Simulate a 1-second delay
  }

  ngOnDestroy(): void { }

}

