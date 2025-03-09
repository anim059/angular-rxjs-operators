import { Component } from '@angular/core';

@Component({
  selector: 'count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent {

  startOperator(): void { }

  stopOperator(): void { }
}
