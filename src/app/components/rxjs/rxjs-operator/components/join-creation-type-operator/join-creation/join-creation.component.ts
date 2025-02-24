import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { CombineLatestComponent } from '../operators/combine-latest/combine-latest.component';
import { ConcatComponent } from '../operators/concat/concat.component';
import { ForkjoinComponent } from '../operators/forkjoin/forkjoin.component';
import { MergeComponent } from '../operators/merge/merge.component';
import { PartitionComponent } from '../operators/partition/partition.component';
import { RaceComponent } from '../operators/race/race.component';
import { ZipComponent } from '../operators/zip/zip.component';

@Component({
  selector: 'app-join-creation',
  standalone: true,
  imports: [CombineLatestComponent, ConcatComponent, ForkjoinComponent, MergeComponent, PartitionComponent, RaceComponent, ZipComponent],
  templateUrl: './join-creation.component.html',
  styleUrl: './join-creation.component.scss'
})
export class JoinCreationComponent {

  @ViewChildren('combineLatest, concat, forkJoin, merge, partition, race, zip')
  componentElements!: QueryList<ElementRef>;

  scrollTo(componentId: string) {
    let element: ElementRef | undefined;
    element = this.componentElements.find((el) => el.nativeElement.id === componentId);
    // Scroll to the element if found
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
