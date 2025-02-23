import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rxjs-operator',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.scss'
})
export class RxjsOperatorComponent {

  operatorType : {name: string, url: string}[] = [
    {
      name: 'creation',
      url: ''
    },
    {
      name: 'join creation',
      url: 'join-creation'
    },
    {
      name: 'filtering',
      url: ''
    },
    {
      name: 'join',
      url: ''
    },
    {
      name: 'boolean',
      url: ''
    },
    {
      name: 'error handling',
      url: ''
    },
    {
      name: 'mathematical',
      url: ''
    },
    {
      name: 'multicasting',
      url: ''
    },
    {
      name: 'transformation',
      url: 'transformation'
    },
    {
      name: 'utility',
      url: ''
    }
  ];
}
