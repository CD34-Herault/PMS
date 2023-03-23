/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { HistoriqueModule } from './historique.module';

/* Containers */
import * as historiqueContainers from './containers';

import { SBRouteData } from '@modules/navigation/models';
import { ServeursModule } from '@modules/serveurs/serveurs.module';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: historiqueContainers.HistoriqueComponent,
        data: {
            title: 'Historique - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/patchManagement/dashboard',
                },
                {
                    text: 'Historique',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ServeursModule,HistoriqueModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class HistoriqueRoutingModule {}