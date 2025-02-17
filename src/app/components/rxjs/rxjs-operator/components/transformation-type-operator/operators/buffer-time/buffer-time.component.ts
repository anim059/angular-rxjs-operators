import { buffer, bufferTime, fromEvent } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'buffer-time',
  standalone: true,
  imports: [],
  templateUrl: './buffer-time.component.html',
  styleUrl: './buffer-time.component.scss'
})
export class BufferTimeComponent {

  clickObservable  = fromEvent(document, 'click');

  subscription: any;

  values: string[] = [];
 
  ngOnInit(): void {}

  startOperator(time: any = '5000'): void{
    this.subscription = this.clickObservable.pipe(bufferTime(Number(time))).subscribe(chucks => {
      chucks.forEach((chunk, index) => this.values.push(`'clicked:', ${index+1}`));
    });
  }

  stopOperator(): void{
    this.subscription.unsubscribe();
    this.values = [];
  }

}
