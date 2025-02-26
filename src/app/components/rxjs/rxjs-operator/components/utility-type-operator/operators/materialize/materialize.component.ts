import { Subscription, map, materialize, of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'materialize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materialize.component.html',
  styleUrl: './materialize.component.scss'
})
export class MaterializeComponent {

  source$ = of(1, 2, 3).pipe(
    map((value) => {
      if (value === 3) throw new Error('Invalid value');
      return value;
    })
  );

  materialized$ = this.source$.pipe(materialize());

  subscription !: Subscription;

  results: string[] = [];

  startOperator(): void {
    this.subscription = this.materialized$.subscribe((notification) => {
      if (notification.kind === 'N') {
        this.results.push(`kind: 'N', value: ${notification.value}, error: ${notification.error}, hasValue: true`)
      } else if (notification.kind === 'E') {
        this.results.push(`kind: 'E', value: ${notification.value}, error: ${notification.error}, hasValue: false`)
      } else if (notification.kind === 'C') {
        this.results.push(`Completed`);
      }
    });
  }

  stopOperator(): void {
    this.results = [];
    this.subscription.unsubscribe();
  }

}
