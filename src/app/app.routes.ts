import { Routes } from "@angular/router";
import { ETab } from "./entities/components/header/entities/enums/tab.enum";

export const routes: Routes = [
    {
        path: ETab.HOME,
        loadComponent: () => import('./entities/components/pages/home/home.component').then((component) => component.HomeComponent)
    },
    {
        path: ETab.THREATS,
        loadChildren: () => import('./entities/components/pages/threats/threats.routes').then((routes) => routes.threatRoutes)
    },
    {
        path: ETab.IN_WORK,
        loadComponent: () => import('./entities/components/pages/in-work/in-work.component').then((component) => component.InWorkComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ETab.HOME
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ETab.HOME
    }
];
