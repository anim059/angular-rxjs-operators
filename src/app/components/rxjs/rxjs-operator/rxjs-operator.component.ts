import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'rxjs-operator',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.scss'
})
export class RxjsOperatorComponent implements OnInit {

  router = inject(Router);

  activatedRoute = inject(ActivatedRoute);

  activeRouteName: string = '';

  operatorType: { name: string, url: string }[] = [
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

  ngOnInit(): void {
    this.activeRouteName = this.operatorType.find((item) => item.url && this.router.url.includes(item.url))?.name || ''
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        debugger
        this.activeRouteName = this.operatorType.find((item) => item.url && event.url.includes(item.url))?.name || ''
      }
    })
  }
}
