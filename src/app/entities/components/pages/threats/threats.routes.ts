import { Routes } from "@angular/router";
import { EThreat } from "./entities/enums/threat.enum";
import { ThreatInfoComponent } from "./entities/components/threat-info/threat-info.component";
import { ThreatsComponent } from "./threats.component";

export const threatRoutes: Routes = [
    {
        path: '',
        component: ThreatsComponent,
        children: [
            {
                path: EThreat.SQL_INJECTION,
                component: ThreatInfoComponent,
            },
            {
                path: EThreat.DDOS_ATTACK,
                loadComponent: () => import('./entities/components/threat-info/threat-info.component').then((component) => component.ThreatInfoComponent)
            },
            {
                path: EThreat.XSS_ATTACK,
                loadComponent: () => import('./entities/components/threat-info/threat-info.component').then((component) => component.ThreatInfoComponent)
            },
            {
                path: EThreat.BROKEN_ACCESS_CONTROL,
                loadComponent: () => import('./entities/components/threat-info/threat-info.component').then((component) => component.ThreatInfoComponent)
            }
        ]
    }
];
