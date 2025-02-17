import { bufferCount, of } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'buffer-count',
  standalone: true,
  imports: [],
  templateUrl: './buffer-count.component.html',
  styleUrl: './buffer-count.component.scss'
})
export class BufferCountComponent {

  sourceObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17, 18); // source observable

  subscription: any;

  values: string[] = [];

  ngOnInit(): void { }

  startOperator(size: any = '3'): void {
    this.subscription = this.sourceObservable.pipe(bufferCount(Number(size))).subscribe((chunk) => {
      this.values.push(`'Buffered chunk:', ${chunk}`);
    });
  }

  startOperatorWithBufferEveryArg(size: any = '3', arg: any = '3'): void {
    this.values = [];
    this.subscription = this.sourceObservable.pipe(bufferCount(Number(size), Number(arg))).subscribe(chunk => this.values.push(`'Buffered chunk:', ${chunk}`));
  }

  stopOperator(): void {
    this.subscription.unsubscribe();
    this.values = [];
  }

}
