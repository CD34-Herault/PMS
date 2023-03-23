/* tslint:disable: ordered-imports*/
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DragAndDropModule } from 'angular-draggable-droppable';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

/* Components */
import * as calendrierComponents from './components';

/* Containers */
import * as calendrierContainers from './containers';

/* Services */
import * as calendrierServices from './services';
import { TimelineComponent } from './components/timeline/timeline.component';

/* Directives */
import * as calendriersDirectives from './directives';
import { CheckTimeLineDirective } from './directives/check-time-line.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        DragAndDropModule,
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory,
        }),
        
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: [...calendrierServices.services, ...calendriersDirectives.Mesdirectives],
    declarations: [...calendrierContainers.containers, ...calendrierComponents.components, ...calendriersDirectives.Mesdirectives, TimelineComponent, CheckTimeLineDirective],
    exports: [...calendrierContainers.containers, ...calendrierComponents.components],
})
export class CalendrierModule { }
