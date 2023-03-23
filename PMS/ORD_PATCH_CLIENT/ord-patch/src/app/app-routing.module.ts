import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'patchManagement/dashboard/alco',
    },
    {
        path: 'patchManagement',
        pathMatch: 'full',
        redirectTo: 'patchManagement/dashboard/alco',
    },
    {
        path: 'patchManagement/charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'patchManagement/dashboard/:Site',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'patchManagement/auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'patchManagement/error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'patchManagement/version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: 'patchManagement/serveurs/:OSSelected',
        loadChildren: () =>
            import('modules/serveurs/serveurs-routing.module').then(m => m.ServeursRoutingModule),
    },
    {
        path: 'patchManagement/historique/:OSSelected',
        loadChildren: () =>
            import('modules/historique/historique-routing.module').then(m => m.HistoriqueRoutingModule),
    },
    {
        path: 'patchManagement/apropos',
        loadChildren: () =>
            import('modules/apropos/apropos-routing.module').then(m => m.AproposRoutingModule),
    },
    {
        path: 'patchManagement/settings',
        loadChildren: () =>
            import('modules/settings/settings-routing.module').then(m => m.SettingsRoutingModule),
    },
    {
        path: 'patchManagement/planificationExceptionnel',
        loadChildren: () =>
            import('modules/plannification-exceptionnel/plannification-exceptionnel-routing.module').then(m => m.PlannificationExceptionnelRoutingModule),
    },
    {
        path: 'patchManagement/exclusions/:urlKey',
        loadChildren: () =>
            import('modules/exclusions/exclusions-routing.module').then(m => m.ExclusionsRoutingModule),
    },
    {
        path: 'patchManagement/exclusions',
        loadChildren: () =>
            import('modules/exclusions/exclusions-routing.module').then(m => m.ExclusionsRoutingModule),
    },
    {
        path: 'patchManagement/calendrier',
        loadChildren: () =>
            import('modules/calendrier/calendrier-routing.module').then(m => m.CalendrierRoutingModule),
    },
    {
        path: 'patchManagement/waaf',
        loadChildren: () =>
            import('modules/waaf/waaf-routing.module').then(m => m.waafRoutingModule),
    },
    {
        path: 'patchManagement/**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
