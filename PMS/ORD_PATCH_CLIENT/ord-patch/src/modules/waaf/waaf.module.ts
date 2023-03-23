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
import * as waafComponent from './components';

/* Containers */
import * as  waafContainers from './containers';

/* Directives */
import * as waafDirectives from './directives';

/* Services */
import * as waafService from './services';




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
    ...waafService.services,
    ...waafDirectives.Mesdirectives],
  declarations: [...waafContainers.containers, ...waafComponent.components, ...waafDirectives.Mesdirectives,],
  exports: [...waafContainers.containers, ...waafComponent.components],
})
export class WaafModule { }
