import { Component, OnInit } from '@angular/core';
import { Subject, isEmpty } from 'rxjs';

@Component({
  selector: 'is-empty',
  standalone: true,
  imports: [],
  templateUrl: './is-empty.component.html',
  styleUrl: './is-empty.component.scss'
})
export class IsEmptyComponent implements OnInit {

  source$ = new Subject<string>();

  result$ = this.source$.pipe(isEmpty());

  ngOnInit(): void {
    this.source$.subscribe(x => console.log(x));
    this.result$.subscribe(x => console.log(x));

    this.source$.next('a');
    this.source$.next('b');
    this.source$.next('c');
    this.source$.complete();
  }

}
