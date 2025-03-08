import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { CombineLatestAllComponent } from "../operators/combine-latest-all/combine-latest-all.component";
import { ConcatALLComponent } from '../operators/concat-all/concat-all.component';
import { ExhaustAllComponent } from '../operators/exhaust-all/exhaust-all.component';
import { MergeAllComponent } from '../operators/merge-all/merge-all.component';
import { StartWithComponent } from '../operators/start-with/start-with.component';
import { SwitchAllComponent } from '../operators/switch-all/switch-all.component';
import { WithLatestFromComponent } from '../operators/with-latest-from/with-latest-from.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    CombineLatestAllComponent,
    ConcatALLComponent,
    MergeAllComponent,
    SwitchAllComponent,
    ExhaustAllComponent,
    StartWithComponent,
    WithLatestFromComponent,
    CombineLatestAllComponent
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

  @ViewChildren('combineLatestAll, concatAll, mergeAll, switchAll, exhaustAll, startWith, withLatestFrom')
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
