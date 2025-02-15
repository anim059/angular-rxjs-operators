import { Component, OnInit } from '@angular/core';
import { buffer, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'buffer',
  standalone: true,
  imports: [],
  templateUrl: './buffer.component.html',
  styleUrl: './buffer.component.scss'
})
export class BufferComponent implements OnInit{

  clicks = fromEvent(document, 'click'); // close notification

  intervalEvents = interval(1000); // source observable

  buffered = this.intervalEvents.pipe(buffer(this.clicks));

  subscription: any;

  bufferedValues: any;
 
  ngOnInit(): void {}

  startBufferOperator(): void{
    this.subscription = this.buffered.subscribe(x => this.bufferedValues = x);
  }

  stopBufferOperator(): void{
    this.subscription.unsubscribe();
    this.bufferedValues = null;
  }

}
