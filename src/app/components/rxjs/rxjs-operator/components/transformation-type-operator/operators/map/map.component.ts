import { Component, signal } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'a-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  sourceObservable = of(1, 2, 3, 4, 5);

  subscription: any;

  values: number[] = [];

  isProcessing = signal<boolean>(false);

  startOperator(): void {
    this.values = [];
    this.isProcessing.set(true);
    this.subscription = this.sourceObservable.pipe(
      map((res)=>{
        return res*res
      })
    ).subscribe({
      next:(res)=>{
        this.isProcessing.set(false);
        this.values.push(res);
      }
    })
  }

  stopOperator(): void {
    this.isProcessing.set(false);
    this.subscription.unsubscribe();
    this.values = [];
  }

}
