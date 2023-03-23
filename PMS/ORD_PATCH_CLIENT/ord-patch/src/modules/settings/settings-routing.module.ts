/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { SettingsModule } from './settings.module';

/* Containers */
import * as settingsContainers from './containers';



/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'A propos - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/patchManagement/dashboard',
                },
                {
                    text: 'Paramètres',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: settingsContainers.SettingsComponent,
    },

];

@NgModule({
    imports: [SettingsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
