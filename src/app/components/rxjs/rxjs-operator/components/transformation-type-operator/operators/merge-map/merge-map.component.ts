import { Component, signal } from "@angular/core";
import { Observable, ReplaySubject, Subject, delay, map, mergeMap, of, takeUntil } from "rxjs";

import { CommonModule } from "@angular/common";

@Component({
  selector: 'merge-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent {

  private start$ = new Subject<void>();

  private destroy$ = new Subject<void>();

  results: { val: string }[] = [];

  constructor() {
  }
  ngOnInit(): void {
    this.start$.pipe(
      takeUntil(this.destroy$),
      mergeMap((_, index) => {
        this.results.push({
          val: ''
        });
        return this.fetchDetails().pipe(
          map((response) => ({ response, index }))
        );
      })
    ).subscribe({
      next: (res) => {
        console.log(res);
        this.results[res.index].val = res.response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  startOperator(): void {
    this.start$.next();
  }

  clearOperator(): void {
    this.start$.complete();

    this.start$ = new Subject<void>(); // Create a new instance

    this.results = [];

    // Re-subscribe to start$
    this.start$.pipe(
      takeUntil(this.destroy$),
      mergeMap((_, index) => {
        this.results.push({ val: '' });
        return this.fetchDetails().pipe(map((response) => ({ response, index })));
      })
    ).subscribe({
      next: (res) => {
        console.log(res);
        this.results[res.index].val = res.response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  fetchDetails(): Observable<any> {
    let rnum = Math.floor((Math.random() * 4)) + 2;
    return of(`HTTP Response in ${rnum} seconds`).pipe(delay(rnum * 1000));
  }

  isProcessing(): boolean {
    let frl = this.results.filter((res) => {
      return res.val === ''
    })
    return frl.length > 0
  }

  ngOnDestroy(): void {
    this.start$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }

}
