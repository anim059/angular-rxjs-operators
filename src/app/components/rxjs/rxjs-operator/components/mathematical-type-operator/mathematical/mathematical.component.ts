import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { CountComponent } from '../operators/count/count.component';
import { MaxComponent } from '../operators/max/max.component';
import { MinComponent } from '../operators/min/min.component';
import { ReduceComponent } from "../operators/reduce/reduce.component";

@Component({
  selector: 'app-mathematical',
  standalone: true,
  imports: [ReduceComponent, MinComponent, MaxComponent, CountComponent],
  templateUrl: './mathematical.component.html',
  styleUrl: './mathematical.component.scss'
})
export class MathematicalComponent {

  @ViewChildren('count, max, min, reduce')
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
