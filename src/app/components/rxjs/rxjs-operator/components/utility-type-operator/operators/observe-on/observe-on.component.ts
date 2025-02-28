import { Component, OnInit } from '@angular/core';
import { Subscription, animationFrameScheduler, asyncScheduler, interval, observeOn, of, take } from 'rxjs';

@Component({
  selector: 'observe-on',
  standalone: true,
  imports: [],
  templateUrl: './observe-on.component.html',
  styleUrl: './observe-on.component.scss'
})
export class ObserveOnComponent implements OnInit {

  // source$ = interval(10).pipe(take(100));

  synchronousLogs: string[] = [];

  asynchronousLogs: string[] = [];

  subscription1 !: Subscription

  subscription2 !: Subscription

  ngOnInit(): void {

  }

  startWithOutObserveOnOperator(): void {
    this.synchronousLogs.push('SynchronousLogs without ObserveOn: start');
    this.subscription1 = of(1, 2, 3).subscribe((value) => {
      this.synchronousLogs.push(`SynchronousLogs without ObserveOn: ${value}`);
    });
    this.synchronousLogs.push('SynchronousLogs without ObserveOn: end');
  }

  startWithObserveOnOperator(): void {
    this.asynchronousLogs.push('AsynchronousLogs with ObserveOn: start');
    this.subscription2 = of(1, 2, 3).pipe(observeOn(asyncScheduler)).subscribe((value) => {
      this.asynchronousLogs.push(`AsynchronousLogs with ObserveOn: ${value}`);
    });
    this.asynchronousLogs.push('AsynchronousLogs with ObserveOn: end');
  }

  clearOperator(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.synchronousLogs = [];
    this.asynchronousLogs = [];
  }

}
