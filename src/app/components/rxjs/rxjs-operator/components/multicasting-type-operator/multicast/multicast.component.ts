import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { ShareComponent } from '../operator/share/share.component';
import { ShareReplayComponent } from '../operator/share-replay/share-replay.component';

@Component({
  selector: 'multicast',
  standalone: true,
  imports: [ShareComponent, ShareReplayComponent],
  templateUrl: './multicast.component.html',
  styleUrl: './multicast.component.scss'
})
export class MulticastComponent {

  @ViewChildren('share, shareReplay') componentElements!: QueryList<ElementRef>

  scrollTo(componentId: string) {
    let element: ElementRef | undefined;
    element = this.componentElements.find((el) => el.nativeElement.id === componentId);
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
