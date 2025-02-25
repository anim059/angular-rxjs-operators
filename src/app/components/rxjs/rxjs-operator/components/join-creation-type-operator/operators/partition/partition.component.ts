import { Component, signal } from '@angular/core';
import { Observable, Subscription, interval, map, partition, take } from 'rxjs';

@Component({
  selector: 'partition',
  standalone: true,
  imports: [],
  templateUrl: './partition.component.html',
  styleUrl: './partition.component.scss'
})
export class PartitionComponent {

  source$ = interval(1000).pipe(
    take(10),
    map((x) => x + 1)
  );

  even$ !: Observable<number>;
  odd$ !: Observable<number>;
  evenSubscription !: Subscription;
  oddSubscription !: Subscription;

  evenList: number[] = [];

  oddList: number[] = [];

  startOperator(): void {
    [this.even$, this.odd$] = partition(this.source$, (value) => value % 2 === 0);
    this.evenSubscription = this.even$.subscribe((value) => this.evenList.push(value));
    this.oddSubscription = this.odd$.subscribe((value) => this.oddList.push(value));
  }

  stopOperator(): void {
    this.evenList = [];
    this.oddList = [];
    this.evenSubscription.unsubscribe();
    this.oddSubscription.unsubscribe();
  }
}
