import { find, of } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'find',
  standalone: true,
  imports: [],
  templateUrl: './find.component.html',
  styleUrl: './find.component.scss'
})
export class FindComponent {

  users$ = of(
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  );

  startOperator() {
    this.users$.pipe(
      find(user => user.id === 2)
    ).subscribe(user => console.log(user));
  }

  stopOperator() {

  }
}
