/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule,  DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as ExclusionsComponent from './components';

/* Containers */
import * as  exclusionsContainers from './containers';

/* Services */
import * as ExclusionsService from './services';
import { TreeviewModule } from 'ngx-treeview';




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
    DecimalPipe,
    ...ExclusionsService.services],
  declarations: [...exclusionsContainers.containers, ...ExclusionsComponent.components],
  exports: [...exclusionsContainers.containers, ...ExclusionsComponent.components],
})
export class ExclusionsModule { }
