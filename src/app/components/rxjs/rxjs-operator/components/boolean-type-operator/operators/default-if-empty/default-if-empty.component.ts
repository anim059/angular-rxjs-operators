import { defaultIfEmpty, empty } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'default-if-empty',
  standalone: true,
  imports: [],
  templateUrl: './default-if-empty.component.html',
  styleUrl: './default-if-empty.component.scss'
})
export class DefaultIfEmptyComponent {

  source$ = empty();

  // Use defaultIfEmpty to provide a default value
  result$ = this.source$.pipe(defaultIfEmpty(0)); // Default value is 0

}
