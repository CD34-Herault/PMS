/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { CalendrierModule } from './calendrier.module';

/* Containers */
import * as calendrierContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: calendrierContainers.CalendrierPageComponent,
        data: {
            title: 'Calendrier - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/patchManagement/dashboard',
                },
                {
                    text: 'Calendrier',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [CalendrierModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CalendrierRoutingModule {}
