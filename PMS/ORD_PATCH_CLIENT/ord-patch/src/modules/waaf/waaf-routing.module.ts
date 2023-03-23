/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { WaafModule } from './waaf.module';

/* Containers */
import * as waafContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: waafContainers.WaafPageComponent,
        data: {
            title: 'Waaf - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/patchManagement/dashboard',
                },
                {
                    text: 'Waaf',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [WaafModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class waafRoutingModule {}
