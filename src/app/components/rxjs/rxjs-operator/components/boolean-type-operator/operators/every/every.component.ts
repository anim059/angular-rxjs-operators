import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'every',
  standalone: true,
  imports: [],
  templateUrl: './every.component.html',
  styleUrl: './every.component.scss'
})
export class EveryComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6)
      .pipe(every(x => x < 5))
      .subscribe(x => console.log(x));
  }

}
