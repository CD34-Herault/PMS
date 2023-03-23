/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as serveursComponents from './components';

/* Containers */
import * as serveursContainers from './containers';

/* Directives */
import * as serveursDirectives from './directives';

/* Services */
import * as serveursServices from './services';



@NgModule({
  declarations: [
    ...serveursContainers.containers,
    ...serveursComponents.components,
    ...serveursDirectives.Mesdirectives,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
  ],
  providers: [
    DecimalPipe,
    ...serveursServices.services,
    ...serveursDirectives.Mesdirectives,
  ],
  exports: [...serveursContainers.containers, ...serveursComponents.components],
})
export class ServeursModule { }
