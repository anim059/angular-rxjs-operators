import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/rxjs/rxjs-operator/rxjs-operator.component').then((m) => m.RxjsOperatorComponent),
        children: [
            {
                path: 'transformation',
                loadComponent: () => import('./components/rxjs/rxjs-operator/components/transformation-type-operator/transformation/transformation.component').then((m) => m.TransformationComponent)
            }
        ]
    }
];
