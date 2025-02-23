import { combineLatest, interval, map, of, take } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'combine-latest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent {

  temperature$ = interval(4000).pipe(
    map((x) => Math.floor(x + (Math.random() * 20) + 5)),
    take(4)
  ); // Emits temperature values

  humidity$ = interval(5000).pipe(
    map((x) =>  Math.floor(x + (Math.random() * 30) + 15)),
    take(4)
  ); // Emits humidity values

  latestValueOfTemperature: number | null = null;

  latestValueOfHumidity: number | null = null;

  combineLatestValues: { temperature: number, humidity: number }[]  = [];

  subscription: any;

  startOperator(): void {
    this.subscription = combineLatest([this.temperature$, this.humidity$]).subscribe(([temp, humidity]) => {
      this.latestValueOfTemperature = temp;
      this.latestValueOfHumidity = humidity;
      this.combineLatestValues.push({ temperature: temp, humidity });
    })
  }

  stopOperator(): void {
    this.latestValueOfTemperature = null;
    this.latestValueOfHumidity = null;
    this.combineLatestValues = [];
    this.subscription.unsubscribe();
  }

}
