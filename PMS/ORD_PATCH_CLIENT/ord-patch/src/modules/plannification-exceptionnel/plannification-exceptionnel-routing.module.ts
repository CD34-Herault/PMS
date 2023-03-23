/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PlannificationExceptionnelModule } from './plannification-exceptionnel.module';

/* Containers */
import * as plannificationExceptionnelContainers from './containers';

import { SBRouteData } from '@modules/navigation/models';
import { CommonModule } from '@angular/common';
import { ServeursModule } from '@modules/serveurs/serveurs.module';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: plannificationExceptionnelContainers.PlannificationExceptionnelComponent,
        data: {
            title: 'Plannifications - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/patchManagement/dashboard',
                },
                {
                    text: 'Plannifications',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [PlannificationExceptionnelModule, RouterModule.forChild(ROUTES),ServeursModule],
    exports: [RouterModule],
})
export class PlannificationExceptionnelRoutingModule {}