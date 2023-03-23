/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ServeursModule } from './serveurs.module';

/* Containers */
import * as serveurContainers from './containers';

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: serveurContainers.ServeursComponent,
        data: {
            title: 'Serveurs - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/patchManagement/dashboard',
                },
                {
                    text: 'Serveurs',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ServeursModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ServeursRoutingModule {}