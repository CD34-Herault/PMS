/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ExclusionsModule } from './exclusions.module';

/* Containers */
import * as exclusionsContainers from './containers';

import { SBRouteData } from '@modules/navigation/models';
import { ServeursModule } from '@modules/serveurs/serveurs.module';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: exclusionsContainers.ExclusionsComponent,
        data: {
            title: 'Exclusions - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/patchManagement/dashboard',
                },
                {
                    text: 'Exclusions',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ServeursModule,ExclusionsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ExclusionsRoutingModule {}