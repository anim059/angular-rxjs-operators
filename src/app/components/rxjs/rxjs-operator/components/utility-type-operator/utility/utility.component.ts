import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { DelayComponent } from '../operators/delay/delay.component';
import { DelayWhenComponent } from '../operators/delay-when/delay-when.component';
import { DematerializeComponent } from '../operators/dematerialize/dematerialize.component';
import { MaterializeComponent } from '../operators/materialize/materialize.component';
import { ObserveOnComponent } from '../operators/observe-on/observe-on.component';
import { SubscribeOnComponent } from '../operators/subscribe-on/subscribe-on.component';
import { TapComponent } from '../operators/tap/tap.component';
import { TimeIntervalComponent } from '../operators/time-interval/time-interval.component';
import { TimeoutComponent } from '../operators/timeout/timeout.component';
import { TimestampComponent } from '../operators/timestamp/timestamp.component';
import { ToArrayComponent } from '../operators/to-array/to-array.component';

@Component({
  selector: 'app-utility',
  standalone: true,
  imports: [DelayComponent, DelayWhenComponent, DematerializeComponent, MaterializeComponent, ObserveOnComponent,
    SubscribeOnComponent, TapComponent, TimeIntervalComponent, TimeoutComponent, TimestampComponent, ToArrayComponent],
  templateUrl: './utility.component.html',
  styleUrl: './utility.component.scss'
})
export class UtilityComponent {

  @ViewChildren('delay, delayWhen, dematerialize, materialize, observeOn, subscribeOn, tap, timeInterval, timeout, timeStamp, toArray')
  componentElements!: QueryList<ElementRef>;

  scrollTo(componentId: string) {
    let element: ElementRef | undefined;
    element = this.componentElements.find((el) => el.nativeElement.id === componentId);
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
