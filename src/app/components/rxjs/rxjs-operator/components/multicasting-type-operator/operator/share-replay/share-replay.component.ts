import { Component, inject } from '@angular/core';
import {Subscription, shareReplay} from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'share-replay',
  standalone: true,
  imports: [],
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.scss'
})
export class ShareReplayComponent {

  http = inject(HttpClient);

  request$ = this.http.get('https://fakestoreapi.com/products/1').pipe(shareReplay(1));

  subscription1 !: Subscription;

  subscription2 !: Subscription;


  startOperator2() {
    this.subscription1 = this.request$.subscribe(value => console.log(value));
  }

  startOperator1() {
    this.subscription2 = this.request$.subscribe(value => console.log(value));
  }

  stopOperator() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
