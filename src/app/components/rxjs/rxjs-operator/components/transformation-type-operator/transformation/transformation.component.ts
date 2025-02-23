import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { BufferComponent } from '../operators/buffer/buffer.component';
import { BufferCountComponent } from '../operators/buffer-count/buffer-count.component';
import { BufferTimeComponent } from '../operators/buffer-time/buffer-time.component';
import { ConcatMapComponent } from '../operators/concat-map/concat-map.component';
import { ExhaustMapComponent } from '../operators/exhaust-map/exhaust-map.component';
import { MapComponent } from '../operators/map/map.component';
import { MergeMapComponent } from '../operators/merge-map/merge-map.component';
import { MergeScanComponent } from '../operators/merge-scan/merge-scan.component';
import { PairwiseComponent } from '../operators/pairwise/pairwise.component';
import { ScanComponent } from '../operators/scan/scan.component';
import { SwitchMapComponent } from '../operators/switch-map/switch-map.component';
import { SwitchScanComponent } from '../operators/switch-scan/switch-scan.component';
import { WindowComponent } from '../operators/window/window.component';
import { WindowCountComponent } from '../operators/window-count/window-count.component';
import { WindowTimeComponent } from '../operators/window-time/window-time.component';

@Component({
  selector: 'transformation',
  standalone: true,
  imports: [BufferComponent, BufferCountComponent, BufferTimeComponent, ConcatMapComponent, ExhaustMapComponent, MapComponent,
    MergeMapComponent, MergeScanComponent, PairwiseComponent, ScanComponent, SwitchMapComponent, SwitchScanComponent],
  templateUrl: './transformation.component.html',
  styleUrl: './transformation.component.scss'
})
export class TransformationComponent {

  @ViewChildren('buffer, bufferCount, bufferTime, concatMap, exhaustMap, aMap, mergeMap, mergeScan, pairwise, scan, switchMap, switchScan')
  componentElements!: QueryList<ElementRef>;

  scrollTo(componentId: string) {
    let element: ElementRef | undefined;
    element = this.componentElements.find((el) => el.nativeElement.id === componentId);
    console.log(element)
    // Scroll to the element if found
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}