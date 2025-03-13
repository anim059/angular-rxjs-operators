import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'catch-error',
  standalone: true,
  imports: [],
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.scss'
})
export class CatchErrorComponent implements OnInit {

  ngOnInit(): void {
    of([1, 2, 3]).pipe(
      catchError(error => {
        console.error('HTTP Error:', error);
        return of({ message: 'Error occurred', data: [] });
      })
    ).subscribe(response => console.log(response));
  }

}
