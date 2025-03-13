import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { DefaultIfEmptyComponent } from '../operators/default-if-empty/default-if-empty.component';
import { EveryComponent } from '../operators/every/every.component';
import { FindComponent } from '../operators/find/find.component';
import { FindIndexComponent } from '../operators/find-index/find-index.component';
import { IsEmptyComponent } from '../operators/is-empty/is-empty.component';

@Component({
  selector: 'app-boolean',
  standalone: true,
  imports: [DefaultIfEmptyComponent, EveryComponent, FindComponent, FindIndexComponent, IsEmptyComponent],
  templateUrl: './boolean.component.html',
  styleUrl: './boolean.component.scss'
})
export class BooleanComponent {
  @ViewChildren('defaultEmpty, every, find, findIndex, isEmpty')
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
