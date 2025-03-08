import { delay, of, startWith } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'start-with',
  standalone: true,
  imports: [],
  templateUrl: './start-with.component.html',
  styleUrl: './start-with.component.scss'
})
export class StartWithComponent {

  source$ = of('Loaded response after 2s').pipe(delay(2000));

  subscription !: any;

  result: string = '';

  startOperator() {
    this.subscription = this.source$.pipe(startWith('Loading...')).subscribe({
      next: (res) => {
        this.result = res;
      }
    });
  }

  stopOperator() {
    this.subscription.unsubscribe();
    this.result = '';
  }
}
