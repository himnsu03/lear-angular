import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'counter',
        loadComponent: () => import('./counter/counter').then((m) => m.Counter),
    },
    {
        path: 'event-get',
        loadComponent: () => import('./event-get/event-get').then((m) => m.EventGet),
    },
    {
        path: 'form-modules',
        loadComponent: () => import('./form-modules/form-modules').then((m) => m.FormModules),
    },
    {
        path: '',
        redirectTo: 'counter',
        pathMatch: 'full',
    }

];
