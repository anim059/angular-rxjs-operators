import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { CatchErrorComponent } from '../operators/catch-error/catch-error.component';
import { RetryComponent } from '../operators/retry/retry.component';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [CatchErrorComponent, RetryComponent],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.scss'
})
export class ErrorHandlingComponent {

  @ViewChildren('catchError, retry')
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
