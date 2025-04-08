import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./@presentation/pages/landing/landing.routes').then(m => m.landingRoutes)
    },
    { 
        path: '',
        redirectTo: '',
        pathMatch: 'full' 
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
