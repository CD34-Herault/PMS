/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule,  DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TreeviewModule } from 'ngx-treeview';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as plannificationExceptionnelComponents from './components';

/* Containers */
import * as  plannificationExceptionnelContainers from './containers';

/* Services */
import * as plannificationExceptionnelServices from './services';
import { TablePlannifComponent } from './components/table-plannif/table-plannif.component';



@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    TreeviewModule.forRoot(),

  ],
  providers: [
    ...plannificationExceptionnelServices.services],
  declarations: [...plannificationExceptionnelContainers.containers,   TablePlannifComponent,],
  exports: [...plannificationExceptionnelContainers.containers, ...plannificationExceptionnelComponents.components],
})
export class PlannificationExceptionnelModule { }
