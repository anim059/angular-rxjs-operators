import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/rxjs/rxjs-operator/rxjs-operator.component').then((m) => m.RxjsOperatorComponent),
        children: [
            {
                path: 'transformation',
                loadComponent: () => import('./components/rxjs/rxjs-operator/components/transformation-type-operator/transformation/transformation.component').then((m) => m.TransformationComponent)
            },
            {
                path: 'join-creation',
                loadComponent: () => import('./components/rxjs/rxjs-operator/components/join-creation-type-operator/join-creation/join-creation.component').then((m) => m.JoinCreationComponent)
            },
            {
                path: 'utility',
                loadComponent: () => import('./components/rxjs/rxjs-operator/components/utility-type-operator/utility/utility.component').then((m) => m.UtilityComponent)
            },
            {
                path: 'join',
                loadComponent: () => import('./components/rxjs/rxjs-operator/components/join-type-operator/join/join.component').then((m) => m.JoinComponent)
            }
        ]
    }
];
