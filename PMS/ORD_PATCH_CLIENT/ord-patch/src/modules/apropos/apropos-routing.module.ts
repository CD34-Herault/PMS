/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { AproposModule } from './apropos.module';

/* Containers */
import * as aproposContainers from './containers';



/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'A propos - Patch Management',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'A propos',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: aproposContainers.AproposComponent,
    },

];

@NgModule({
    imports: [AproposModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AproposRoutingModule {}
