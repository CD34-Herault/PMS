/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule,  DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as historiqueComponents from './components';

/* Containers */
import * as  historiqueContainers from './containers';

/* Services */
import * as historiqueServices from './services';




@NgModule({
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
    ...historiqueServices.services],
  declarations: [...historiqueContainers.containers, ...historiqueComponents.components],
  exports: [...historiqueContainers.containers, ...historiqueComponents.components],
})
export class HistoriqueModule { }
