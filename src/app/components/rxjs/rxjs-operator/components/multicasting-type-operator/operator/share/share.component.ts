import { Component, inject } from '@angular/core';
import { Observable, share } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share.component.html',
  styleUrl: './share.component.scss'
})
export class ShareComponent {

  http = inject(HttpClient);

  resultWithShare: { name: string, value: any }[] = [
    {
      name: 'Subscriber 1',
      value: {}
    },
    {
      name: 'Subscriber 2',
      value: {}
    }
  ];

  resultWithoutShare: { name: string, value: any }[] = [
    {
      name: 'Subscriber 1',
      value: {}
    },
    {
      name: 'Subscriber 2',
      value: {}
    }
  ];


  startOperator1() {
    const request$ = this.http.get('https://fakestoreapi.com/products/1').pipe(share());
    request$.subscribe(value => console.log(value));
    request$.subscribe(value => console.log(value));
  }

  startOperator2() {
    const request$ = this.http.get('https://fakestoreapi.com/products/1').pipe();
    request$.subscribe(value => console.log(value));
    request$.subscribe(value => console.log(value));
  }

  stopOperator() {
    this.resultWithShare = [];
    this.resultWithoutShare = [];
  }
}
